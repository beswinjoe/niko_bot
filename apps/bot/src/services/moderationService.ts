import { Guild, GuildMember, User, EmbedBuilder, PermissionFlagsBits, Client } from 'discord.js';
import { prisma } from '@niko/db';
import { parseDuration, validateTimeoutDuration } from '../utils/duration';
import { boss } from '../worker';

export type ModerationAction = 'WARN' | 'TIMEOUT' | 'KICK' | 'BAN';

export interface ModerationResult {
  success: boolean;
  embed?: EmbedBuilder;
  error?: string;
}

export class ModerationService {
  public async executeAction(
    client: Client,
    guild: Guild,
    moderator: GuildMember,
    targetUser: User,
    action: ModerationAction,
    reason: string,
    durationStr?: string | null
  ): Promise<ModerationResult> {
    try {
      // Upsert DB records in parallel
      await Promise.all([
        (prisma as any).user.upsert({
          where: { id: targetUser.id },
          update: { username: targetUser.username },
          create: { id: targetUser.id, username: targetUser.username }
        }),
        (prisma as any).user.upsert({
          where: { id: moderator.user.id },
          update: { username: moderator.user.username },
          create: { id: moderator.user.id, username: moderator.user.username }
        }),
        (prisma as any).guild.upsert({
          where: { id: guild.id },
          update: { name: guild.name },
          create: { id: guild.id, name: guild.name }
        })
      ]);

      const targetMember = await guild.members.fetch(targetUser.id).catch(() => null);

      // Check role hierarchy if target is in the server
      if (targetMember) {
        if (targetMember.id === guild.ownerId) {
          return { success: false, error: 'You cannot moderate the server owner.' };
        }
        if (targetMember.id === client.user?.id) {
          return { success: false, error: 'I cannot moderate myself.' };
        }
        if (targetMember.roles.highest.position >= moderator.roles.highest.position && moderator.id !== guild.ownerId) {
          return { success: false, error: 'You cannot moderate a user with an equal or higher role.' };
        }
      const me = guild.members.me;
        if (me && targetMember.roles.highest.position >= me.roles.highest.position) {
          return { success: false, error: 'I cannot moderate this user due to role hierarchy.' };
        }
      }

      // Fetch Server Configuration & command permissions in parallel
      const [settings, rolePerms] = await Promise.all([
        (prisma as any).guildSetting.findUnique({ where: { guildId: guild.id } }),
        (prisma as any).roleCommandPermission.findMany({ where: { guildId: guild.id } })
      ]);
      const prefix = settings?.prefix || '$';

      // Helper for role checks
      const checkRole = (cmdName: string) => {
        if (moderator.id === guild.ownerId) return true;
        const cmdPerms = rolePerms.filter((p: any) => p.command === cmdName || p.command === '*');
        
        if (cmdPerms.length === 0) {
          return false;
        }
        
        return cmdPerms.some((p: any) => moderator.roles.cache.has(p.roleId));
      };

      let actionDesc = '';
      let color = '#7C3AED';
      let parsedDurationLabel: string | undefined;
      let actionMs: number | null = null;

      if (action === 'WARN') {
        if (!checkRole('warn')) {
          return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role warn\`` };
        }
        if (!moderator.permissions.has(PermissionFlagsBits.ModerateMembers)) {
          return { success: false, error: '⚠️ You do not have the Discord permission to warn members.' };
        }
        await (prisma as any).warning.create({
          data: { guildId: guild.id, userId: targetUser.id, reason }
        });
        actionDesc = 'Warn';
      } 
      else if (action === 'TIMEOUT') {
        if (!checkRole('timeout') && !checkRole('mute')) {
          return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role mute\`` };
        }
        if (!moderator.permissions.has(PermissionFlagsBits.ModerateMembers)) {
          return { success: false, error: '⚠️ You do not have the Discord permission to mute members.' };
        }
        if (!targetMember) return { success: false, error: 'User is not in the server.' };
        
        const muteRole = settings?.mutedRole ? guild.roles.cache.get(settings.mutedRole) : null;
        if (!muteRole) {
          return { success: false, error: `⚠️ This server does not have a mute role configured.\n\nUse \`${prefix}muterole @Role\` to set one or \`${prefix}muterole create [name]\` to create one.` };
        }

        const me = guild.members.me;
        if (!me?.permissions.has(PermissionFlagsBits.ManageRoles)) {
          return { success: false, error: '⚠️ Niko needs the `Manage Roles` permission to perform this action.' };
        }
        if (muteRole.position >= me.roles.highest.position) {
          return { success: false, error: '⚠️ Niko cannot manage that role because it is equal to or higher than Niko\'s highest role.' };
        }

        if (!durationStr) return { success: false, error: 'Duration is required for timeout.' };
        
        const ms = parseDuration(durationStr);
        if (!ms || !validateTimeoutDuration(ms)) {
          return { success: false, error: 'Invalid duration. Max timeout is 28 days. Format: 10m, 1h, 1d.' };
        }
        actionMs = ms;
        
        await Promise.all([
          targetMember.roles.add(muteRole, reason),
          targetMember.timeout(ms, reason).catch(() => null) // Fallback to timeout, but don't fail if permissions are weird.
        ]);
        
        actionDesc = 'Mute';
        parsedDurationLabel = durationStr;
      } 
      else if (action === 'KICK') {
        if (!checkRole('kick')) {
          return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role kick\`` };
        }
        if (!moderator.permissions.has(PermissionFlagsBits.KickMembers)) {
          return { success: false, error: '⚠️ You do not have the Discord permission to kick members.' };
        }
        if (!targetMember) return { success: false, error: 'User is not in the server.' };
        
        const me = guild.members.me;
        if (!me?.permissions.has(PermissionFlagsBits.KickMembers)) {
          return { success: false, error: '⚠️ Niko needs the `Kick Members` permission to perform this action.' };
        }
        
        await targetMember.kick(reason);
        actionDesc = 'Kick';
      } 
      else if (action === 'BAN') {
        if (!checkRole('ban')) {
          return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role ban\`` };
        }
        if (!moderator.permissions.has(PermissionFlagsBits.BanMembers)) {
          return { success: false, error: '⚠️ You do not have the Discord permission to ban members.' };
        }
        
        const me = guild.members.me;
        if (!me?.permissions.has(PermissionFlagsBits.BanMembers)) {
          return { success: false, error: '⚠️ Niko needs the `Ban Members` permission to perform this action.' };
        }
        
        let ms: number | null = null;
        if (durationStr) {
          ms = parseDuration(durationStr);
          if (!ms) return { success: false, error: 'Invalid duration format (e.g. 1h, 7d).' };
          parsedDurationLabel = durationStr;
          actionMs = ms;
        }

        await guild.members.ban(targetUser.id, { reason }).catch(err => {
          throw new Error('Failed to ban user: ' + err.message);
        });

        if (ms) {
          await boss.send('unban', { guildId: guild.id, userId: targetUser.id }, {
            startAfter: Math.floor(Date.now() / 1000) + Math.floor(ms / 1000),
            singletonKey: `unban-${guild.id}-${targetUser.id}`
          });
        }
        
        actionDesc = 'Ban';
        color = '#E53E3E';
      }

      // Create Moderation Case
      const modCase = await (prisma as any).moderationCase.create({
        data: {
          guildId: guild.id,
          userId: targetUser.id,
          moderatorId: moderator.user.id,
          type: action,
          reason,
          duration: parsedDurationLabel,
          expiresAt: actionMs ? new Date(Date.now() + actionMs) : null
        } as any
      });

      // DM the target user (silently fail if DMs are closed, run asynchronously)
      const dmVerbs: Record<ModerationAction, string> = {
        WARN: `You were warned in ${guild.name}.`,
        TIMEOUT: `You were muted in ${guild.name}.`,
        KICK: `You were kicked from ${guild.name}.`,
        BAN: `You were banned from ${guild.name}.`,
      };
      targetUser.send(`${dmVerbs[action]}\nReason: ${reason}`).catch(() => {});

      const embed = new EmbedBuilder()
        .setColor(color as any)
        .setTitle(`Niko Moderation`)
        .setDescription(
          `**Action:** ${actionDesc}\n` +
          `**User:** ${targetUser.tag} (<@${targetUser.id}>)\n` +
          (parsedDurationLabel ? `**Duration:** ${parsedDurationLabel}\n` : '') +
          `**Moderator:** ${moderator.user.tag} (<@${moderator.user.id}>)\n` +
          `**Reason:** ${reason}`
        )
        .setFooter({ text: `Case #${modCase.id}` })
        .setTimestamp();

      return { success: true, embed };

    } catch (error: any) {
      console.error('[ModerationService] Error:', error);
      return { success: false, error: error.message || 'An internal error occurred.' };
    }
  }

  public async purge(
    client: Client,
    guild: Guild,
    moderator: GuildMember,
    channel: any,
    amount: number
  ): Promise<ModerationResult> {
    const settings = await (prisma as any).guildSetting.findUnique({ where: { guildId: guild.id } });
    const prefix = settings?.prefix || '$';

    const rolePerms = await (prisma as any).roleCommandPermission.findMany({ where: { guildId: guild.id } });
    const cmdPerms = rolePerms.filter((p: any) => p.command === 'purge' || p.command === '*');
    const hasPerm = moderator.id === guild.ownerId || 
      (cmdPerms.length > 0 ? cmdPerms.some((p: any) => moderator.roles.cache.has(p.roleId)) : false);

    if (!hasPerm) return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role purge\`` };
    if (!moderator.permissions.has(PermissionFlagsBits.ManageMessages)) return { success: false, error: '⚠️ You do not have the Discord permission to manage messages.' };
    
    if (isNaN(amount) || amount < 1 || amount > 100) return { success: false, error: 'Please provide a valid amount between 1 and 100.' };
    
    if (channel.isTextBased() && 'bulkDelete' in channel) {
      const deleted = await channel.bulkDelete(amount, true).catch(() => null);
      if (deleted) return { success: true, embed: new EmbedBuilder().setColor('#10B981').setDescription(`Successfully purged ${deleted.size} messages.`) };
    }
    return { success: false, error: 'Failed to purge messages or cannot purge in this channel type.' };
  }

  public async unban(
    client: Client,
    guild: Guild,
    moderator: GuildMember,
    targetId: string,
    reason: string
  ): Promise<ModerationResult> {
    const settings = await (prisma as any).guildSetting.findUnique({ where: { guildId: guild.id } });
    const prefix = settings?.prefix || '$';

    const rolePerms = await (prisma as any).roleCommandPermission.findMany({ where: { guildId: guild.id } });
    const cmdPerms = rolePerms.filter((p: any) => p.command === 'unban' || p.command === 'ban' || p.command === '*');
    const hasPerm = moderator.id === guild.ownerId || 
      (cmdPerms.length > 0 ? cmdPerms.some((p: any) => moderator.roles.cache.has(p.roleId)) : false);

    if (!hasPerm) return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role unban\`` };
    if (!moderator.permissions.has(PermissionFlagsBits.BanMembers)) return { success: false, error: '⚠️ You do not have the Discord permission to unban members.' };
    
    const me = guild.members.me;
    if (!me?.permissions.has(PermissionFlagsBits.BanMembers)) {
      return { success: false, error: '⚠️ Niko needs the `Ban Members` permission to perform this action.' };
    }

    try {
      await guild.members.unban(targetId, reason);
      
      try {
        const userToDm = await client.users.fetch(targetId);
        if (userToDm) {
          await userToDm.send(`You were unbanned from ${guild.name}.\nReason: ${reason}`);
        }
      } catch {
        // Silently fail DM
      }

      const modCase = await (prisma as any).moderationCase.create({
        data: {
          guildId: guild.id,
          userId: targetId,
          moderatorId: moderator.user.id,
          type: 'UNBAN',
          reason
        } as any
      });
      return { success: true, embed: new EmbedBuilder().setColor('#10B981').setDescription(`Successfully unbanned <@${targetId}>. Case #${modCase.id}`) };
    } catch (e: any) {
      return { success: false, error: `Failed to unban user: ${e.message}` };
    }
  }

  public async getCases(
    guild: Guild,
    targetUserId?: string,
    actionType?: ModerationAction | 'UNBAN'
  ): Promise<ModerationResult> {
    const where: any = { guildId: guild.id };
    if (targetUserId) where.userId = targetUserId;
    if (actionType) where.type = actionType;

    const cases = await (prisma as any).moderationCase.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    const embed = new EmbedBuilder().setColor('#3B82F6').setTitle(`Moderation Cases`);
    if (cases.length === 0) embed.setDescription('No cases found.');
    else {
      embed.setDescription(cases.map((c: any) => 
        `\`#${c.id}\` **${c.type}** | Target: <@${c.userId}> | Mod: <@${c.moderatorId}> | Reason: ${c.reason || 'None'}` + 
        (c.duration ? ` | Duration: ${c.duration}` : '')
      ).join('\n'));
    }
    return { success: true, embed };
  }
}

export const moderationService = new ModerationService();
