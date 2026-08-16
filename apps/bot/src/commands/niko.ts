import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { Command } from './index';
import { helpService } from '../services/helpService';
import { intelligence } from '../services/intelligence';
import { prisma } from '@niko/db';

export const nikoCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('niko')
    .setDescription('Niko Intelligence and Utilities')
    .addSubcommand(subcommand =>
      subcommand.setName('help').setDescription('Learn how to use Niko')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('why').setDescription('Get moderation context for a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to investigate').setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('history').setDescription('View moderation history for a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to investigate').setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('recommend').setDescription('Get server security recommendations')
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    if (!interaction.guild) return;
    const subcommand = interaction.options.getSubcommand(true);
    await interaction.deferReply();

    try {
      if (subcommand === 'help') {
        const settings = await (prisma as any).guildSetting.findUnique({ where: { guildId: interaction.guild.id } });
        const prefix = settings?.prefix || '$';
        const res = helpService.getHelp(prefix);
        return interaction.editReply({ embeds: [res.embed!] });
      } else if (subcommand === 'why') {
        const userId = interaction.options.getUser('user', true).id;
        const res = await intelligence.getWhyContext(interaction.guild.id, userId);
        return res.success ? interaction.editReply({ embeds: [res.embed!] }) : interaction.editReply({ content: res.error });
      } else if (subcommand === 'history') {
        const userId = interaction.options.getUser('user', true).id;
        const res = await intelligence.getHistory(interaction.guild.id, userId);
        return res.success ? interaction.editReply({ embeds: [res.embed!] }) : interaction.editReply({ content: res.error });
      } else if (subcommand === 'recommend') {
        const res = await intelligence.getRecommendation(interaction.guild.id);
        return interaction.editReply({ embeds: [res.embed!] });
      }
    } catch (error: any) {
      console.error(error);
      const content = 'There was an error while executing the niko command.';
      await interaction.editReply({ content });
    }
  }
};
