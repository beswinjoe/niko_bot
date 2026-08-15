import 'dotenv/config';
import { client, commands } from './client';
import { Events, REST, Routes } from 'discord.js';
import { nikoCommand } from './commands/niko';
import { securityCommand } from './commands/security';
import { moderationCommand } from './commands/moderation';
import { configCommand } from './commands/config';
import { analyticsCommand } from './commands/analytics';
import { sentinel } from './services/sentinel';
import { intelligence } from './services/intelligence';
import { startWorker, boss } from './worker';
import { initAIModerationWorker } from './worker/aiModeration';
import { initUnbanWorker } from './worker/unbanWorker';
import { handlePrefixCommand } from './handlers/prefixCommandHandler';

async function bootstrap() {
  const token = process.env.DISCORD_TOKEN;
  if (!token) {
    throw new Error('DISCORD_TOKEN is not defined in the environment variables.');
  }

  // Load events and commands here...
  commands.set(nikoCommand.data.name, nikoCommand);
  commands.set(securityCommand.data.name, securityCommand);
  commands.set(moderationCommand.data.name, moderationCommand);
  commands.set(configCommand.data.name, configCommand);
  commands.set(analyticsCommand.data.name, analyticsCommand);

  // Initialize background workers (pg-boss via PostgreSQL)
  await startWorker();
  await initAIModerationWorker();
  await initUnbanWorker();

  client.once(Events.ClientReady, async (readyClient) => {
    console.log(`[Niko] Logged in as ${readyClient.user.tag}`);
    const rest = new REST().setToken(token);
    try {
      console.log(`[Niko] Started refreshing ${commands.size} application (/) commands.`);
      
      const body = commands.map(cmd => cmd.data.toJSON());
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

  client.on(Events.GuildMemberAdd, async (member) => {
    await sentinel.evaluateJoin(member);
  });

  client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;
    
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
        singletonKey: message.id // Ensure we don't duplicate analysis for the exact same message
      });

      await intelligence.trackMessageActivity(message.guild.id, message.channel.id);
    }
  });

  client.on(Events.InteractionCreate, async (interaction) => {
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

  await client.login(token);
}

bootstrap().catch(console.error);
