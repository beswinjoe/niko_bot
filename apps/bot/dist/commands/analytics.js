"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsCommand = void 0;
const discord_js_1 = require("discord.js");
const db_1 = require("@niko/db");
exports.analyticsCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('analytics')
        .setDescription('View server security statistics')
        .addSubcommand(subcommand => subcommand.setName('overview').setDescription('General server overview'))
        .addSubcommand(subcommand => subcommand.setName('members').setDescription('Member growth and snapshot'))
        .addSubcommand(subcommand => subcommand.setName('activity').setDescription('Message activity stats')),
    async execute(interaction) {
        if (!interaction.guild)
            return;
        const subcommand = interaction.options.getSubcommand(true);
        try {
            if (subcommand === 'overview') {
                const cases = await db_1.prisma.moderationCase.count({ where: { guildId: interaction.guild.id } });
                const incidents = await db_1.prisma.securityEvent.count({ where: { guildId: interaction.guild.id } });
                const embed = new discord_js_1.EmbedBuilder()
                    .setColor('#7C3AED')
                    .setTitle(`Analytics Overview: ${interaction.guild.name}`)
                    .addFields({ name: 'Total Moderation Cases', value: cases.toString(), inline: true }, { name: 'Total Security Incidents', value: incidents.toString(), inline: true });
                await interaction.reply({ embeds: [embed] });
            }
            else if (subcommand === 'members') {
                const snapshots = await db_1.prisma.memberSnapshot.findMany({
                    where: { guildId: interaction.guild.id },
                    orderBy: { timestamp: 'desc' },
                    take: 5
                });
                if (snapshots.length === 0) {
                    return interaction.reply({ content: 'Not enough data yet. Niko needs more time to collect member snapshots.', ephemeral: true });
                }
                const embed = new discord_js_1.EmbedBuilder()
                    .setColor('#7C3AED')
                    .setTitle('Member Analytics')
                    .setDescription('Recent member snapshots:\n' + snapshots.map(s => `<t:${Math.floor(s.timestamp.getTime() / 1000)}:f> - **${s.count}** members`).join('\n'));
                await interaction.reply({ embeds: [embed] });
            }
            else if (subcommand === 'activity') {
                const activity = await db_1.prisma.messageActivity.findMany({
                    where: { guildId: interaction.guild.id },
                    orderBy: { timestamp: 'desc' },
                    take: 10
                });
                if (activity.length === 0) {
                    return interaction.reply({ content: 'Not enough data yet. Niko needs more time to collect message activity.', ephemeral: true });
                }
                const embed = new discord_js_1.EmbedBuilder()
                    .setColor('#7C3AED')
                    .setTitle('Activity Analytics')
                    .setDescription('Recent high-activity channels:\n' + activity.map(a => `<#${a.channelId}>: **${a.count}** messages (<t:${Math.floor(a.timestamp.getTime() / 1000)}:R>)`).join('\n'));
                await interaction.reply({ embeds: [embed] });
            }
        }
        catch (error) {
            console.error(error);
            const content = 'There was an error while fetching analytics.';
            if (interaction.replied || interaction.deferred)
                await interaction.followUp({ content, ephemeral: true });
            else
                await interaction.reply({ content, ephemeral: true });
        }
    }
};
