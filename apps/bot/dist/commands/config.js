"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configCommand = void 0;
const discord_js_1 = require("discord.js");
const db_1 = require("@niko/db");
exports.configCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('config')
        .setDescription('Configure Niko settings for your server')
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.ManageGuild)
        .addSubcommand(subcommand => subcommand.setName('antiraid').setDescription('Toggle Anti-Raid protection')
        .addBooleanOption(opt => opt.setName('enabled').setDescription('Enable or disable').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('antinuke').setDescription('Toggle Anti-Nuke protection')
        .addBooleanOption(opt => opt.setName('enabled').setDescription('Enable or disable').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('antispam').setDescription('Toggle Anti-Spam protection')
        .addBooleanOption(opt => opt.setName('enabled').setDescription('Enable or disable').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('logging').setDescription('Configure logging channel')
        .addChannelOption(opt => opt.setName('channel').setDescription('Channel for logs').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('verification').setDescription('Toggle Verification system')
        .addBooleanOption(opt => opt.setName('enabled').setDescription('Enable or disable').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('setup').setDescription('Setup core role configurations')
        .addRoleOption(opt => opt.setName('mod_role').setDescription('Moderator Role').setRequired(false))
        .addRoleOption(opt => opt.setName('senior_mod_role').setDescription('Senior Moderator Role').setRequired(false))
        .addRoleOption(opt => opt.setName('admin_role').setDescription('Admin Role').setRequired(false))),
    async execute(interaction) {
        if (!interaction.guild)
            return;
        const subcommand = interaction.options.getSubcommand(true);
        try {
            // Ensure guild setting exists
            await db_1.prisma.guild.upsert({
                where: { id: interaction.guild.id },
                update: { name: interaction.guild.name },
                create: { id: interaction.guild.id, name: interaction.guild.name }
            });
            let settings = await db_1.prisma.guildSetting.findUnique({ where: { guildId: interaction.guild.id } });
            if (!settings) {
                settings = await db_1.prisma.guildSetting.create({ data: { guildId: interaction.guild.id } });
            }
            const member = interaction.member;
            // Check if user has config permission via RoleCommandPermission or is admin/owner
            const configPerms = await db_1.prisma.roleCommandPermission.findMany({
                where: { guildId: interaction.guild.id, command: 'config' }
            });
            let hasConfiguredRole = member.id === interaction.guild.ownerId;
            if (!hasConfiguredRole) {
                if (configPerms.length > 0) {
                    hasConfiguredRole = configPerms.some((p) => member.roles.cache.has(p.roleId));
                }
                else if (settings.adminRole) {
                    hasConfiguredRole = member.roles.cache.has(settings.adminRole);
                }
                else {
                    hasConfiguredRole = true; // No restrictions configured
                }
            }
            if (!hasConfiguredRole) {
                return interaction.reply({ content: 'You lack the configured role required to configure the bot.', ephemeral: true });
            }
            const embed = new discord_js_1.EmbedBuilder().setColor('#7C3AED').setTitle('Configuration Updated');
            if (subcommand === 'antiraid') {
                const enabled = interaction.options.getBoolean('enabled', true);
                await db_1.prisma.guildSetting.update({ where: { guildId: interaction.guild.id }, data: { antiRaidEnabled: enabled } });
                embed.setDescription(`Anti-Raid protection has been **${enabled ? 'enabled' : 'disabled'}**.`);
            }
            else if (subcommand === 'antinuke') {
                const enabled = interaction.options.getBoolean('enabled', true);
                await db_1.prisma.guildSetting.update({ where: { guildId: interaction.guild.id }, data: { antiNukeEnabled: enabled } });
                embed.setDescription(`Anti-Nuke protection has been **${enabled ? 'enabled' : 'disabled'}**.`);
            }
            else if (subcommand === 'antispam') {
                const enabled = interaction.options.getBoolean('enabled', true);
                await db_1.prisma.guildSetting.update({ where: { guildId: interaction.guild.id }, data: { antiSpamEnabled: enabled } });
                embed.setDescription(`Anti-Spam protection has been **${enabled ? 'enabled' : 'disabled'}**.`);
            }
            else if (subcommand === 'verification') {
                const enabled = interaction.options.getBoolean('enabled', true);
                await db_1.prisma.guildSetting.update({ where: { guildId: interaction.guild.id }, data: { verificationSystem: enabled } });
                embed.setDescription(`Verification system has been **${enabled ? 'enabled' : 'disabled'}**.`);
            }
            else if (subcommand === 'logging') {
                const channel = interaction.options.getChannel('channel', true);
                await db_1.prisma.guildSetting.update({ where: { guildId: interaction.guild.id }, data: { modLogChannelId: channel.id } });
                embed.setDescription(`Logging channel set to <#${channel.id}>.`);
            }
            else if (subcommand === 'setup') {
                const modRole = interaction.options.getRole('mod_role');
                const seniorRole = interaction.options.getRole('senior_mod_role');
                const adminRole = interaction.options.getRole('admin_role');
                const updateData = {};
                if (modRole)
                    updateData.modRole = modRole.id;
                if (seniorRole)
                    updateData.seniorModRole = seniorRole.id;
                if (adminRole)
                    updateData.adminRole = adminRole.id;
                if (Object.keys(updateData).length > 0) {
                    await db_1.prisma.guildSetting.update({ where: { guildId: interaction.guild.id }, data: updateData });
                    embed.setDescription(`Role configuration updated successfully!\n\nYou can also configure specific command permissions via the web dashboard: \`/dashboard\` -> Settings -> Permissions`);
                }
                else {
                    embed.setDescription('No roles provided to update. Use the dashboard for full configuration.');
                }
            }
            await interaction.reply({ embeds: [embed], ephemeral: true });
        }
        catch (error) {
            console.error(error);
            const content = 'There was an error while executing the config command.';
            if (interaction.replied || interaction.deferred)
                await interaction.followUp({ content, ephemeral: true });
            else
                await interaction.reply({ content, ephemeral: true });
        }
    }
};
