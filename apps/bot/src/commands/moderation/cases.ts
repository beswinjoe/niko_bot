import { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } from 'discord.js';
import { Command } from '../index';
import { prisma } from '@niko/db';

export const casesCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('cases')
    .setDescription('View moderation cases for a user.')
    .addUserOption(option => 
      option.setName('user').setDescription('The user to view cases for').setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
    
  async execute(interaction) {
    if (!interaction.guild) return;

    const targetUser = interaction.options.getUser('user', true);

    try {
      const cases = await prisma.moderationCase.findMany({
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

      const embed = new EmbedBuilder()
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

    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'There was an error while trying to fetch the cases.', ephemeral: true });
    }
  },
};
