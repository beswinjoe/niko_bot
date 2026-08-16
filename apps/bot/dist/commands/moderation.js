"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moderationCommand = void 0;
const discord_js_1 = require("discord.js");
const moderationService_1 = require("../services/moderationService");
exports.moderationCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('moderation')
        .setDescription('Moderation commands (Warn, Timeout, Kick, Ban, Unban, Purge, Cases)')
        .addSubcommand(subcommand => subcommand.setName('warn')
        .setDescription('Warn a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to warn').setRequired(true))
        .addStringOption(opt => opt.setName('reason').setDescription('Reason for warning').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('mute')
        .setDescription('Timeout a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to mute').setRequired(true))
        .addStringOption(opt => opt.setName('duration').setDescription('Duration (e.g. 10m, 1h, 1d)').setRequired(true))
        .addStringOption(opt => opt.setName('reason').setDescription('Reason').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('kick')
        .setDescription('Kick a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to kick').setRequired(true))
        .addStringOption(opt => opt.setName('reason').setDescription('Reason').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('ban')
        .setDescription('Ban a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to ban').setRequired(true))
        .addStringOption(opt => opt.setName('reason').setDescription('Reason').setRequired(true))
        .addStringOption(opt => opt.setName('duration').setDescription('Duration (leave empty for permanent)').setRequired(false)))
        .addSubcommand(subcommand => subcommand.setName('unban')
        .setDescription('Unban a user')
        .addStringOption(opt => opt.setName('userid').setDescription('ID of the user to unban').setRequired(true))
        .addStringOption(opt => opt.setName('reason').setDescription('Reason').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('purge')
        .setDescription('Purge messages')
        .addIntegerOption(opt => opt.setName('amount').setDescription('Number of messages to delete (1-100)').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('cases')
        .setDescription('View moderation cases')
        .addUserOption(opt => opt.setName('user').setDescription('Filter by user').setRequired(false))
        .addStringOption(opt => opt.setName('action').setDescription('Filter by action type').setRequired(false)
        .addChoices({ name: 'Warn', value: 'WARN' }, { name: 'Timeout', value: 'TIMEOUT' }, { name: 'Kick', value: 'KICK' }, { name: 'Ban', value: 'BAN' }, { name: 'Unban', value: 'UNBAN' }))),
    async execute(interaction) {
        if (!interaction.guild || !interaction.member || !interaction.channel)
            return;
        const subcommand = interaction.options.getSubcommand(true);
        const member = interaction.member;
        await interaction.deferReply();
        try {
            if (subcommand === 'purge') {
                const amount = interaction.options.getInteger('amount', true);
                const res = await moderationService_1.moderationService.purge(interaction.client, interaction.guild, member, interaction.channel, amount);
                return res.success ? interaction.editReply({ embeds: [res.embed] }) : interaction.editReply({ content: res.error });
            }
            if (subcommand === 'cases') {
                const filterUser = interaction.options.getUser('user');
                const filterAction = interaction.options.getString('action');
                const res = await moderationService_1.moderationService.getCases(interaction.guild, filterUser?.id, filterAction);
                return res.success ? interaction.editReply({ embeds: [res.embed] }) : interaction.editReply({ content: res.error });
            }
            if (subcommand === 'unban') {
                const targetId = interaction.options.getString('userid', true);
                const reason = interaction.options.getString('reason', true);
                const res = await moderationService_1.moderationService.unban(interaction.client, interaction.guild, member, targetId, reason);
                return res.success ? interaction.editReply({ embeds: [res.embed] }) : interaction.editReply({ content: res.error });
            }
            const targetUser = interaction.options.getUser('user', true);
            const reason = interaction.options.getString('reason', true);
            const durationStr = interaction.options.getString('duration');
            let action = null;
            if (subcommand === 'warn')
                action = 'WARN';
            else if (subcommand === 'mute')
                action = 'TIMEOUT';
            else if (subcommand === 'kick')
                action = 'KICK';
            else if (subcommand === 'ban')
                action = 'BAN';
            if (!action)
                return;
            const result = await moderationService_1.moderationService.executeAction(interaction.client, interaction.guild, member, targetUser, action, reason, durationStr);
            if (!result.success) {
                return interaction.editReply({ content: result.error });
            }
            if (result.embed) {
                await interaction.editReply({ embeds: [result.embed] });
            }
        }
        catch (error) {
            console.error(error);
            const content = error.message || 'There was an error while executing the moderation command.';
            await interaction.editReply({ content });
        }
    }
};
