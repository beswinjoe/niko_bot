"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.muteroleCommand = void 0;
const discord_js_1 = require("discord.js");
const muteroleService_1 = require("../services/muteroleService");
const db_1 = require("@niko/db");
exports.muteroleCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('muterole')
        .setDescription('Configure or view the mute role')
        .addSubcommand(subcommand => subcommand.setName('status').setDescription('Show the currently configured mute role'))
        .addSubcommand(subcommand => subcommand.setName('set')
        .setDescription('Configure an existing role as the mute role')
        .addRoleOption(opt => opt.setName('role').setDescription('The role to use for mutes').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('create')
        .setDescription('Create a new role and configure it as the mute role')
        .addStringOption(opt => opt.setName('name').setDescription('Name for the new role (default: Muted)').setRequired(false)))
        .addSubcommand(subcommand => subcommand.setName('remove')
        .setDescription('Remove the configured mute role')),
    async execute(interaction) {
        if (!interaction.guild || !interaction.member)
            return;
        const subcommand = interaction.options.getSubcommand(true);
        const member = interaction.member;
        await interaction.deferReply();
        const settings = await db_1.prisma.guildSetting.findUnique({ where: { guildId: interaction.guild.id } });
        const prefix = settings?.prefix || '$';
        try {
            if (subcommand === 'status') {
                const res = await muteroleService_1.muteroleService.getMuteRole(interaction.guild, prefix);
                return interaction.editReply({ content: res.success ? res.message : res.error, allowedMentions: { parse: [] } });
            }
            else if (subcommand === 'set') {
                const role = interaction.options.getRole('role', true);
                const res = await muteroleService_1.muteroleService.setMuteRole(interaction.guild, member, role.id);
                return interaction.editReply({ content: res.success ? res.message : res.error, allowedMentions: { parse: [] } });
            }
            else if (subcommand === 'create') {
                const name = interaction.options.getString('name') || 'Muted';
                const res = await muteroleService_1.muteroleService.createMuteRole(interaction.guild, member, name);
                return interaction.editReply({ content: res.success ? res.message : res.error, allowedMentions: { parse: [] } });
            }
            else if (subcommand === 'remove') {
                const res = await muteroleService_1.muteroleService.removeMuteRole(interaction.guild, member);
                return interaction.editReply({ content: res.success ? res.message : res.error });
            }
        }
        catch (error) {
            console.error(error);
            const content = error.message || 'There was an error while executing the muterole command.';
            await interaction.editReply({ content });
        }
    }
};
