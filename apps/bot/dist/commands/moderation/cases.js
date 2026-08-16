"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.casesCommand = void 0;
const discord_js_1 = require("discord.js");
const db_1 = require("@niko/db");
exports.casesCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('cases')
        .setDescription('View moderation cases for a user.')
        .addUserOption(option => option.setName('user').setDescription('The user to view cases for').setRequired(true))
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.ModerateMembers),
    async execute(interaction) {
        if (!interaction.guild)
            return;
        const targetUser = interaction.options.getUser('user', true);
        try {
            const cases = await db_1.prisma.moderationCase.findMany({
                where: {
                    guildId: interaction.guild.id,
                    userId: targetUser.id
                },
                orderBy: {
                    createdAt: 'desc'
                },
                take: 10
            });
            if (cases.length === 0) {
                await interaction.reply({ content: `${targetUser.tag} has no moderation cases in this server.`, ephemeral: true });
                return;
            }
            const embed = new discord_js_1.EmbedBuilder()
                .setColor('#4299E1')
                .setTitle(`Moderation Cases | ${targetUser.tag}`)
                .setDescription(`Showing the last 10 cases for <@${targetUser.id}>`)
                .setThumbnail(targetUser.displayAvatarURL());
            for (const modCase of cases) {
                embed.addFields({
                    name: `Case #${modCase.id} | ${modCase.type}`,
                    value: `**Reason:** ${modCase.reason}\n**Date:** <t:${Math.floor(modCase.createdAt.getTime() / 1000)}:R>`,
                });
            }
            await interaction.reply({ embeds: [embed] });
        }
        catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while trying to fetch the cases.', ephemeral: true });
        }
    },
};
