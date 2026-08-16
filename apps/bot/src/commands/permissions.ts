import { SlashCommandBuilder, ChatInputCommandInteraction, GuildMember } from 'discord.js';
import { Command } from './index';
import { permissionsService } from '../services/permissionsService';

export const permissionsCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('permissions')
    .setDescription('Manage Niko role permissions')
    .addSubcommand(subcommand =>
      subcommand.setName('list')
        .setDescription('List all configured role permissions')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('add')
        .setDescription('Add a permission to a role')
        .addRoleOption(opt => opt.setName('role').setDescription('Role to grant permission to').setRequired(true))
        .addStringOption(opt => opt.setName('command').setDescription('Command to allow (e.g. ban, warn, *)').setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('remove')
        .setDescription('Remove a permission from a role')
        .addRoleOption(opt => opt.setName('role').setDescription('Role to remove permission from').setRequired(true))
        .addStringOption(opt => opt.setName('command').setDescription('Command to disallow').setRequired(true))
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    if (!interaction.guild || !interaction.member) return;
    const subcommand = interaction.options.getSubcommand(true);
    const member = interaction.member as GuildMember;
    await interaction.deferReply();

    try {
      if (subcommand === 'list') {
        const res = await permissionsService.listPermissions(interaction.guild);
        return interaction.editReply({ content: res.success ? res.message : res.error, allowedMentions: { parse: [] } });
      } else if (subcommand === 'add') {
        const roleId = interaction.options.getRole('role', true).id;
        const commandName = interaction.options.getString('command', true);
        const res = await permissionsService.addPermission(interaction.guild, member, roleId, commandName);
        return interaction.editReply({ content: res.success ? res.message : res.error });
      } else if (subcommand === 'remove') {
        const roleId = interaction.options.getRole('role', true).id;
        const commandName = interaction.options.getString('command', true);
        const res = await permissionsService.removePermission(interaction.guild, member, roleId, commandName);
        return interaction.editReply({ content: res.success ? res.message : res.error });
      }
    } catch (error: any) {
      console.error(error);
      const content = error.message || 'There was an error while executing the permissions command.';
      await interaction.editReply({ content });
    }
  }
};
