"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionsCommand = void 0;
const discord_js_1 = require("discord.js");
const permissionsService_1 = require("../services/permissionsService");
exports.permissionsCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('permissions')
        .setDescription('Manage Niko role permissions')
        .addSubcommand(subcommand => subcommand.setName('list')
        .setDescription('List all configured role permissions'))
        .addSubcommand(subcommand => subcommand.setName('add')
        .setDescription('Add a permission to a role')
        .addRoleOption(opt => opt.setName('role').setDescription('Role to grant permission to').setRequired(true))
        .addStringOption(opt => opt.setName('command').setDescription('Command to allow (e.g. ban, warn, *)').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('remove')
        .setDescription('Remove a permission from a role')
        .addRoleOption(opt => opt.setName('role').setDescription('Role to remove permission from').setRequired(true))
        .addStringOption(opt => opt.setName('command').setDescription('Command to disallow').setRequired(true))),
    async execute(interaction) {
        if (!interaction.guild || !interaction.member)
            return;
        const subcommand = interaction.options.getSubcommand(true);
        const member = interaction.member;
        await interaction.deferReply();
        try {
            if (subcommand === 'list') {
                const res = await permissionsService_1.permissionsService.listPermissions(interaction.guild);
                return interaction.editReply({ content: res.success ? res.message : res.error, allowedMentions: { parse: [] } });
            }
            else if (subcommand === 'add') {
                const roleId = interaction.options.getRole('role', true).id;
                const commandName = interaction.options.getString('command', true);
                const res = await permissionsService_1.permissionsService.addPermission(interaction.guild, member, roleId, commandName);
                return interaction.editReply({ content: res.success ? res.message : res.error });
            }
            else if (subcommand === 'remove') {
                const roleId = interaction.options.getRole('role', true).id;
                const commandName = interaction.options.getString('command', true);
                const res = await permissionsService_1.permissionsService.removePermission(interaction.guild, member, roleId, commandName);
                return interaction.editReply({ content: res.success ? res.message : res.error });
            }
        }
        catch (error) {
            console.error(error);
            const content = error.message || 'There was an error while executing the permissions command.';
            await interaction.editReply({ content });
        }
    }
};
