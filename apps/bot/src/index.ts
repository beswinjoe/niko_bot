import 'dotenv/config';
import { client, commands } from './client';
import { Events, REST, Routes } from 'discord.js';
import { banCommand } from './commands/moderation/ban';
import { kickCommand } from './commands/moderation/kick';
import { warnCommand } from './commands/moderation/warn';
import { casesCommand } from './commands/moderation/cases';
import { sentinel } from './services/sentinel';
import { intelligence } from './services/intelligence';
import { startWorker, boss } from './worker';
import { initAIModerationWorker } from './worker/aiModeration';

async function bootstrap() {
  const token = process.env.DISCORD_TOKEN;
  if (!token) {
    throw new Error('DISCORD_TOKEN is not defined in the environment variables.');
  }

  // Load events and commands here...
  commands.set(banCommand.data.name, banCommand);
  commands.set(kickCommand.data.name, kickCommand);
  commands.set(warnCommand.data.name, warnCommand);
  commands.set(casesCommand.data.name, casesCommand);

  // Initialize background workers (pg-boss via PostgreSQL)
  await startWorker();
  await initAIModerationWorker();

  client.once(Events.ClientReady, async (readyClient) => {
    console.log(`[Niko] Logged in as ${readyClient.user.tag}`);
    const rest = new REST().setToken(token);
    try {
      console.log(`[Niko] Started refreshing ${commands.size} application (/) commands.`);
      await rest.put(
        Routes.applicationCommands(readyClient.user.id),
        { body: commands.map(cmd => cmd.data.toJSON()) },
      );
      console.log(`[Niko] Successfully reloaded application (/) commands.`);
    } catch (error) {
      console.error(error);
    }
  });

  client.on(Events.GuildMemberAdd, async (member) => {
    await sentinel.evaluateJoin(member);
  });

  client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;
    
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
