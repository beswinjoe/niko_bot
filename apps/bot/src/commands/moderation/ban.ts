import { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } from 'discord.js';
import { Command } from '../index';
import { prisma } from '@niko/db';

export const banCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user from the server.')
    .addUserOption(option => 
      option.setName('user').setDescription('The user to ban').setRequired(true)
    )
    .addStringOption(option => 
      option.setName('reason').setDescription('Reason for the ban').setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    
  async execute(interaction) {
    if (!interaction.guild) return;

    const targetUser = interaction.options.getUser('user', true);
    const reason = interaction.options.getString('reason') ?? 'No reason provided';
    const member = await interaction.guild.members.fetch(targetUser.id).catch(() => null);

    if (member && !member.bannable) {
      await interaction.reply({ content: 'I do not have permission to ban this user.', ephemeral: true });
      return;
    }

    try {
      await interaction.guild.members.ban(targetUser.id, { reason });

      // Ensure user and moderator exist in our DB
      await prisma.user.upsert({
        where: { id: targetUser.id },
        update: { username: targetUser.username },
        create: { id: targetUser.id, username: targetUser.username }
      });
      await prisma.user.upsert({
        where: { id: interaction.user.id },
        update: { username: interaction.user.username },
        create: { id: interaction.user.id, username: interaction.user.username }
      });
      await prisma.guild.upsert({
        where: { id: interaction.guild.id },
        update: { name: interaction.guild.name },
        create: { id: interaction.guild.id, name: interaction.guild.name }
      });

      // Create moderation case
      const modCase = await prisma.moderationCase.create({
        data: {
          guildId: interaction.guild.id,
          userId: targetUser.id,
          moderatorId: interaction.user.id,
          type: 'BAN',
          reason: reason
        }
      });

      const embed = new EmbedBuilder()
        .setColor('#E53E3E')
        .setTitle(`🔨 Case #${modCase.id} | User Banned`)
        .addFields(
          { name: 'User', value: `${targetUser.tag} (${targetUser.id})`, inline: true },
          { name: 'Moderator', value: `${interaction.user.tag}`, inline: true },
          { name: 'Reason', value: reason }
        )
        .setTimestamp();

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'There was an error while trying to ban the user.', ephemeral: true });
    }
  },
};
