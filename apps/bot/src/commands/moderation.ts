import { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ChatInputCommandInteraction, GuildMember } from 'discord.js';
import { Command } from './index';
import { prisma } from '@niko/db';
import { moderationService, ModerationAction } from '../services/moderationService';

export const moderationCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('moderation')
    .setDescription('Moderation commands (Warn, Timeout, Kick, Ban, Cases, Purge)')
    .addSubcommand(subcommand =>
      subcommand.setName('warn')
        .setDescription('Warn a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to warn').setRequired(true))
        .addStringOption(opt => opt.setName('reason').setDescription('Reason for warning').setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('timeout')
        .setDescription('Timeout a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to timeout').setRequired(true))
        .addStringOption(opt => opt.setName('duration').setDescription('Duration (e.g. 10m, 1h, 1d)').setRequired(true))
        .addStringOption(opt => opt.setName('reason').setDescription('Reason').setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('kick')
        .setDescription('Kick a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to kick').setRequired(true))
        .addStringOption(opt => opt.setName('reason').setDescription('Reason').setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('ban')
        .setDescription('Ban a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to ban').setRequired(true))
        .addStringOption(opt => opt.setName('reason').setDescription('Reason').setRequired(true))
        .addStringOption(opt => opt.setName('duration').setDescription('Duration (leave empty for permanent)').setRequired(false))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('purge')
        .setDescription('Purge messages')
        .addIntegerOption(opt => opt.setName('amount').setDescription('Number of messages to delete (1-100)').setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('cases')
        .setDescription('View moderation cases')
        .addUserOption(opt => opt.setName('user').setDescription('Filter by user').setRequired(false))
        .addStringOption(opt => opt.setName('action').setDescription('Filter by action type').setRequired(false)
          .addChoices(
            { name: 'Warn', value: 'WARN' },
            { name: 'Timeout', value: 'TIMEOUT' },
            { name: 'Kick', value: 'KICK' },
            { name: 'Ban', value: 'BAN' }
          )
        )
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    if (!interaction.guild || !interaction.member || !interaction.channel) return;
    const subcommand = interaction.options.getSubcommand(true);
    const member = interaction.member as GuildMember;

    try {
      if (subcommand === 'purge') {
        const purgePerms = await (prisma as any).roleCommandPermission.findMany({
          where: { guildId: interaction.guild.id, command: 'purge' }
        });
        
        let hasConfiguredRole = member.id === interaction.guild.ownerId;
        if (!hasConfiguredRole) {
          hasConfiguredRole = purgePerms.length === 0 || purgePerms.some((p: any) => member.roles.cache.has(p.roleId));
        }
        
        if (!hasConfiguredRole) {
          return interaction.reply({ content: 'You lack the configured role required for this command.', ephemeral: true });
        }
        
        if (!member.permissions.has(PermissionFlagsBits.ManageMessages)) {
          return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
        }
        const amount = interaction.options.getInteger('amount', true);
        if (amount < 1 || amount > 100) {
          return interaction.reply({ content: 'Amount must be between 1 and 100.', ephemeral: true });
        }
        await interaction.deferReply({ ephemeral: true });
        if (interaction.channel.isTextBased() && 'bulkDelete' in interaction.channel) {
          const messages = await interaction.channel.bulkDelete(amount, true).catch(() => null);
          if (!messages) return interaction.followUp({ content: 'Failed to purge messages.' });
          return interaction.followUp({ content: `Successfully purged ${messages.size} messages.` });
        }
        return interaction.followUp({ content: 'Cannot purge in this channel type.' });
      }

      if (subcommand === 'cases') {
        const filterUser = interaction.options.getUser('user');
        const filterAction = interaction.options.getString('action');
        
        const where: any = { guildId: interaction.guild.id };
        if (filterUser) where.userId = filterUser.id;
        if (filterAction) where.type = filterAction;

        const cases = await prisma.moderationCase.findMany({
          where,
          orderBy: { createdAt: 'desc' },
          take: 10,
          include: {
            user: true,
            moderator: true
          }
        });

        const embed = new EmbedBuilder().setColor('#3B82F6').setTitle(`Moderation Cases`);
        if (cases.length === 0) embed.setDescription('No cases found.');
        else {
          embed.setDescription(cases.map((c: any) => 
            `\`#${c.id}\` **${c.type}** | Target: <@${c.userId}> | Mod: <@${c.moderatorId}> | Reason: ${c.reason || 'None'}` + 
            (c.duration ? ` | Duration: ${c.duration}` : '')
          ).join('\n'));
        }
        return interaction.reply({ embeds: [embed] });
      }

      const targetUser = interaction.options.getUser('user', true);
      const reason = interaction.options.getString('reason', true);
      const durationStr = interaction.options.getString('duration');

      let action: ModerationAction | null = null;
      if (subcommand === 'warn') action = 'WARN';
      else if (subcommand === 'timeout') action = 'TIMEOUT';
      else if (subcommand === 'kick') action = 'KICK';
      else if (subcommand === 'ban') action = 'BAN';

      if (!action) return;

      const result = await moderationService.executeAction(
        interaction.client,
        interaction.guild,
        member,
        targetUser,
        action,
        reason,
        durationStr
      );

      if (!result.success) {
        return interaction.reply({ content: result.error, ephemeral: true });
      }

      if (result.embed) {
        await interaction.reply({ embeds: [result.embed] });
      }

    } catch (error: any) {
      console.error(error);
      const content = error.message || 'There was an error while executing the moderation command.';
      if (interaction.replied || interaction.deferred) await interaction.followUp({ content, ephemeral: true });
      else await interaction.reply({ content, ephemeral: true });
    }
  }
};
