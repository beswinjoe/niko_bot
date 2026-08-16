import 'dotenv/config';
import { setDefaultResultOrder } from 'dns';
setDefaultResultOrder('ipv4first');
import { client, commands } from './client';
import { Events, REST, Routes } from 'discord.js';
import { sentinel } from './services/sentinel';
import { intelligence } from './services/intelligence';
import { startWorker, boss } from './worker';
import { prisma } from '@niko/db';
import { initAIModerationWorker } from './worker/aiModeration';
import { initUnbanWorker } from './worker/unbanWorker';
import { handlePrefixCommand } from './handlers/prefixCommandHandler';

// Import slash commands
import { moderationCommand } from './commands/moderation';
import { rulesCommand } from './commands/rules';
import { afkCommand } from './commands/afk';
import { permissionsCommand } from './commands/permissions';
import { nikoCommand } from './commands/niko';
import { muteroleCommand } from './commands/muterole';

async function bootstrap() {
  const token = process.env.DISCORD_TOKEN;
  if (!token) {
    throw new Error('DISCORD_TOKEN is not defined in the environment variables.');
  }

  // Load slash commands into collection
  const slashCommands = [
    moderationCommand,
    rulesCommand,
    afkCommand,
    permissionsCommand,
    nikoCommand,
    muteroleCommand
  ];
  for (const cmd of slashCommands) {
    commands.set(cmd.data.name, cmd);
  }

  // Initialize background workers (pg-boss via PostgreSQL)
  await startWorker();
  await initAIModerationWorker();
  await initUnbanWorker();

  client.once(Events.ClientReady, async (readyClient) => {
    console.log(`[Niko] Logged in as ${readyClient.user.tag}`);
    const rest = new REST().setToken(token);
    try {
      console.log(`[Niko] Started refreshing application (/) commands.`);
      
      const body = slashCommands.map(c => c.data.toJSON());
      const devGuildId = process.env.DEV_GUILD_ID;

      if (process.env.NODE_ENV === 'development' && devGuildId) {
        await rest.put(
          Routes.applicationGuildCommands(readyClient.user.id, devGuildId),
          { body },
        );
        console.log(`[Niko] Successfully reloaded guild application (/) commands for guild ${devGuildId}.`);
      } else {
        await rest.put(
          Routes.applicationCommands(readyClient.user.id),
          { body },
        );
        console.log(`[Niko] Successfully reloaded global application (/) commands.`);
      }
    } catch (error) {
      console.error(error);
    }
  });

  client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = commands.get(interaction.commandName);
    if (!command) {
      console.error(`No command matching ${interaction.commandName} was found.`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
      } else {
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  });

  client.on(Events.GuildMemberAdd, async (member) => {
    await sentinel.evaluateJoin(member);
  });

  client.on(Events.GuildCreate, async (guild) => {
    console.log(`[Niko] Joined new guild: ${guild.name} (${guild.id})`);
    try {
      await prisma.guild.upsert({
        where: { id: guild.id },
        update: { name: guild.name, memberCount: guild.memberCount },
        create: {
          id: guild.id,
          name: guild.name,
          memberCount: guild.memberCount,
          settings: {
            create: {}
          }
        }
      });
    } catch (error) {
      console.error(`[GuildCreate Error] Failed to register guild ${guild.id}:`, error);
    }
  });

  client.on(Events.GuildDelete, async (guild) => {
    console.log(`[Niko] Left guild: ${guild.name} (${guild.id})`);
    try {
      // We keep the data for audit/history, but you could mark it as inactive here
      // if you add an isActive field to the schema later.
    } catch (error) {
      console.error(`[GuildDelete Error] Failed to handle leaving guild ${guild.id}:`, error);
    }
  });

  client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;
    
    try {
      // Process prefix commands (includes AFK check/mention handling inside)
      await handlePrefixCommand(message);
      
      await sentinel.evaluateMessage(message);
      
      if (message.guild) {
        // Enqueue AI moderation job to pg-boss (idempotent, retries enabled)
        await boss.send('ai-moderation', {
          messageId: message.id,
          channelId: message.channel.id,
          guildId: message.guild.id,
          content: message.content,
          authorId: message.author.id,
          authorTag: message.author.tag,
        }, {
          retryLimit: 3,
          retryBackoff: true,
          singletonKey: message.id
        });

        await intelligence.trackMessageActivity(message.guild.id, message.channel.id);
      }
    } catch (error) {
      console.error('[MessageCreate Error]', error);
    }
  });

  await client.login(token);
}

bootstrap().catch(console.error);
