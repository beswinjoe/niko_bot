import { SlashCommandBuilder, ChatInputCommandInteraction, GuildMember } from 'discord.js';
import { Command } from './index';
import { afkService } from '../services/afkService';

export const afkCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('afk')
    .setDescription('Manage your AFK status')
    .addSubcommand(subcommand =>
      subcommand.setName('set')
        .setDescription('Set your AFK status')
        .addStringOption(opt => opt.setName('reason').setDescription('Reason for being AFK').setRequired(false))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('status')
        .setDescription('Check your AFK status')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('remove')
        .setDescription('Remove your AFK status')
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    if (!interaction.guild || !interaction.member) return;
    const subcommand = interaction.options.getSubcommand(true);
    const member = interaction.member as GuildMember;
    await interaction.deferReply();

    try {
      if (subcommand === 'set') {
        const reason = interaction.options.getString('reason') || 'AFK';
        const res = await afkService.setAfk(interaction.user.id, reason) as any;
        return interaction.editReply({ content: res.success ? res.message : res.error });
      } else if (subcommand === 'status') {
        const res = await afkService.getStatus(interaction.user.id);
        return interaction.editReply({ content: res.success ? res.message : res.error });
      } else if (subcommand === 'remove') {
        const res = await afkService.removeAfk(interaction.user.id);
        return interaction.editReply({ content: res.success ? res.message : res.error });
      }
    } catch (error: any) {
      console.error(error);
      const content = error.message || 'There was an error while executing the afk command.';
      await interaction.editReply({ content });
    }
  }
};
