import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction } from 'discord.js';
import { Command } from './index';

export const nikoCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('niko')
    .setDescription('Main entry point for Niko Security Bot')
    .addSubcommand(subcommand =>
      subcommand.setName('status').setDescription('View the main dashboard and bot status')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('help').setDescription('Learn how to use Niko')
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    if (!interaction.guild) return;
    const subcommand = interaction.options.getSubcommand(false) || 'status';

    try {
      if (subcommand === 'status') {
        const embed = new EmbedBuilder()
          .setColor('#7C3AED')
          .setTitle('Niko | Security Overview')
          .setDescription('Your server security assistant.')
          .addFields(
            { name: 'Security Score', value: '🟢 Excellent (100/100)', inline: true },
            { name: 'Threat Level', value: '⚪ Minimal', inline: true },
            { name: 'Niko Status', value: '✅ Online and Monitoring', inline: false }
          )
          .setTimestamp();

        const row = new ActionRowBuilder<ButtonBuilder>()
          .addComponents(
            new ButtonBuilder()
              .setCustomId('btn_security')
              .setLabel('Security')
              .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
              .setCustomId('btn_moderation')
              .setLabel('Moderation')
              .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
              .setCustomId('btn_analytics')
              .setLabel('Analytics')
              .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
              .setCustomId('btn_settings')
              .setLabel('Settings')
              .setStyle(ButtonStyle.Secondary)
          );

        await interaction.reply({ embeds: [embed], components: [row] });
      } else if (subcommand === 'help') {
        const embed = new EmbedBuilder()
          .setColor('#7C3AED')
          .setTitle('Niko | Help Guide')
          .setDescription('Here are the main command modules available:\n\n' +
            '`/niko` - Main dashboard and status\n' +
            '`/security` - Manage server security and lockdowns\n' +
            '`/moderation` - Warn, timeout, kick, ban, purge\n' +
            '`/config` - Configure automod, antiraid, and logging\n' +
            '`/analytics` - View server security statistics'
          );
        await interaction.reply({ embeds: [embed] });
      }
    } catch (error) {
      console.error(error);
      const content = 'There was an error while executing the niko command.';
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content, ephemeral: true });
      } else {
        await interaction.reply({ content, ephemeral: true });
      }
    }
  },
};
