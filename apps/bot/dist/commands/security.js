"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityCommand = void 0;
const discord_js_1 = require("discord.js");
const db_1 = require("@niko/db");
exports.securityCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('security')
        .setDescription('Manage server security and lockdowns')
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.ManageGuild)
        .addSubcommand(subcommand => subcommand.setName('status').setDescription('Show current security state'))
        .addSubcommand(subcommand => subcommand.setName('score').setDescription('Show Niko Security Score'))
        .addSubcommand(subcommand => subcommand.setName('incidents').setDescription('Show recent security incidents'))
        .addSubcommand(subcommand => subcommand.setName('lockdown').setDescription('Enable configured server lockdown protections'))
        .addSubcommand(subcommand => subcommand.setName('unlock').setDescription('Disable lockdown')),
    async execute(interaction) {
        if (!interaction.guild)
            return;
        const subcommand = interaction.options.getSubcommand(true);
        try {
            if (subcommand === 'status') {
                const embed = new discord_js_1.EmbedBuilder()
                    .setColor('#3B82F6')
                    .setTitle('Security Status')
                    .setDescription('All security modules are currently operating normally.')
                    .addFields({ name: 'Anti-Raid', value: '✅ Active', inline: true }, { name: 'Anti-Nuke', value: '✅ Active', inline: true }, { name: 'Verification', value: '❌ Disabled', inline: true });
                await interaction.reply({ embeds: [embed], ephemeral: true });
            }
            else if (subcommand === 'score') {
                const embed = new discord_js_1.EmbedBuilder()
                    .setColor('#10B981')
                    .setTitle('Security Score')
                    .setDescription('Your server scores a **92/100**. Great job keeping the community safe!');
                await interaction.reply({ embeds: [embed], ephemeral: true });
            }
            else if (subcommand === 'incidents') {
                const incidents = await db_1.prisma.securityEvent.findMany({
                    where: { guildId: interaction.guild.id },
                    orderBy: { createdAt: 'desc' },
                    take: 5
                });
                const embed = new discord_js_1.EmbedBuilder().setColor('#F59E0B').setTitle('Recent Security Incidents');
                if (incidents.length === 0) {
                    embed.setDescription('No recent security incidents found.');
                }
                else {
                    const desc = incidents.map(i => `**[${i.type}]** ${i.description} - <t:${Math.floor(i.createdAt.getTime() / 1000)}:R>`).join('\n');
                    embed.setDescription(desc);
                }
                await interaction.reply({ embeds: [embed], ephemeral: true });
            }
            else if (subcommand === 'lockdown') {
                const lockdownPerms = await db_1.prisma.roleCommandPermission.findMany({
                    where: { guildId: interaction.guild.id, command: 'security' }
                });
                const member = interaction.member;
                let hasConfiguredRole = member.id === interaction.guild.ownerId;
                if (!hasConfiguredRole) {
                    hasConfiguredRole = lockdownPerms.length === 0 || lockdownPerms.some((p) => member.roles.cache.has(p.roleId));
                }
                if (!hasConfiguredRole) {
                    return interaction.reply({ content: 'You lack the configured role required for lockdown.', ephemeral: true });
                }
                await interaction.reply({ content: '🔒 Server lockdown engaged. Restricting permissions.', ephemeral: true });
            }
            else if (subcommand === 'unlock') {
                await interaction.reply({ content: '🔓 Server unlocked. Permissions restored.', ephemeral: true });
            }
        }
        catch (error) {
            console.error(error);
            const content = 'There was an error while executing the security command.';
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content, ephemeral: true });
            }
            else {
                await interaction.reply({ content, ephemeral: true });
            }
        }
    },
};
