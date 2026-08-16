"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnCommand = void 0;
const discord_js_1 = require("discord.js");
const db_1 = require("@niko/db");
exports.warnCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('warn')
        .setDescription('Warn a user.')
        .addUserOption(option => option.setName('user').setDescription('The user to warn').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for the warning').setRequired(true))
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.ModerateMembers),
    async execute(interaction) {
        if (!interaction.guild)
            return;
        const targetUser = interaction.options.getUser('user', true);
        const reason = interaction.options.getString('reason', true);
        try {
            // Ensure user and moderator exist in our DB
            await db_1.prisma.user.upsert({
                where: { id: targetUser.id },
                update: { username: targetUser.username },
                create: { id: targetUser.id, username: targetUser.username }
            });
            await db_1.prisma.user.upsert({
                where: { id: interaction.user.id },
                update: { username: interaction.user.username },
                create: { id: interaction.user.id, username: interaction.user.username }
            });
            await db_1.prisma.guild.upsert({
                where: { id: interaction.guild.id },
                update: { name: interaction.guild.name },
                create: { id: interaction.guild.id, name: interaction.guild.name }
            });
            // Create warning
            await db_1.prisma.warning.create({
                data: {
                    guildId: interaction.guild.id,
                    userId: targetUser.id,
                    reason: reason
                }
            });
            // Create moderation case
            const modCase = await db_1.prisma.moderationCase.create({
                data: {
                    guildId: interaction.guild.id,
                    userId: targetUser.id,
                    moderatorId: interaction.user.id,
                    type: 'WARN',
                    reason: reason
                }
            });
            const embed = new discord_js_1.EmbedBuilder()
                .setColor('#ECC94B')
                .setTitle(`⚠️ Case #${modCase.id} | User Warned`)
                .addFields({ name: 'User', value: `${targetUser.tag} (${targetUser.id})`, inline: true }, { name: 'Moderator', value: `${interaction.user.tag}`, inline: true }, { name: 'Reason', value: reason })
                .setTimestamp();
            await interaction.reply({ embeds: [embed] });
            // Optional: Try to DM the user
            await targetUser.send(`You have been warned in **${interaction.guild.name}** for: ${reason}`).catch(() => null);
        }
        catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while trying to warn the user.', ephemeral: true });
        }
    },
};
