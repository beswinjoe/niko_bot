"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afkCommand = void 0;
const discord_js_1 = require("discord.js");
const afkService_1 = require("../services/afkService");
exports.afkCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('afk')
        .setDescription('Manage your AFK status')
        .addSubcommand(subcommand => subcommand.setName('set')
        .setDescription('Set your AFK status')
        .addStringOption(opt => opt.setName('reason').setDescription('Reason for being AFK').setRequired(false)))
        .addSubcommand(subcommand => subcommand.setName('status')
        .setDescription('Check your AFK status'))
        .addSubcommand(subcommand => subcommand.setName('remove')
        .setDescription('Remove your AFK status')),
    async execute(interaction) {
        if (!interaction.guild || !interaction.member)
            return;
        const subcommand = interaction.options.getSubcommand(true);
        const member = interaction.member;
        await interaction.deferReply();
        try {
            if (subcommand === 'set') {
                const reason = interaction.options.getString('reason') || 'AFK';
                const res = await afkService_1.afkService.setAfk(interaction.user.id, reason);
                return interaction.editReply({ content: res.success ? res.message : res.error });
            }
            else if (subcommand === 'status') {
                const res = await afkService_1.afkService.getStatus(interaction.user.id);
                return interaction.editReply({ content: res.success ? res.message : res.error });
            }
            else if (subcommand === 'remove') {
                const res = await afkService_1.afkService.removeAfk(interaction.user.id);
                return interaction.editReply({ content: res.success ? res.message : res.error });
            }
        }
        catch (error) {
            console.error(error);
            const content = error.message || 'There was an error while executing the afk command.';
            await interaction.editReply({ content });
        }
    }
};
