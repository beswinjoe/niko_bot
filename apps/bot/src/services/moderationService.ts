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
      // Upsert DB records
      await (prisma as any).user.upsert({
        where: { id: targetUser.id },
        update: { username: targetUser.username },
        create: { id: targetUser.id, username: targetUser.username }
      });
      await (prisma as any).user.upsert({
        where: { id: moderator.user.id },
        update: { username: moderator.user.username },
        create: { id: moderator.user.id, username: moderator.user.username }
      });
      await (prisma as any).guild.upsert({
        where: { id: guild.id },
        update: { name: guild.name },
        create: { id: guild.id, name: guild.name }
      });

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

      // Fetch Server Configuration
      const settings = await (prisma as any).guildSetting.findUnique({ where: { guildId: guild.id } });

      // Fetch command permissions
      const rolePerms = await (prisma as any).roleCommandPermission.findMany({ where: { guildId: guild.id } });

      // Helper for role checks
      const checkRole = (cmdName: string, fallbackRoleId?: string | null) => {
        if (moderator.id === guild.ownerId) return true;
        const cmdPerms = rolePerms.filter((p: any) => p.command === cmdName);
        
        if (cmdPerms.length === 0) {
          // If no specific command permissions are configured, check the fallback role (e.g. modRole)
          return !fallbackRoleId || moderator.roles.cache.has(fallbackRoleId);
        }
        
        return cmdPerms.some((p: any) => moderator.roles.cache.has(p.roleId));
      };

      let actionDesc = '';
      let color = '#7C3AED';
      let parsedDurationLabel: string | undefined;
      let actionMs: number | null = null;

      if (action === 'WARN') {
        if (!checkRole('warn', settings?.modRole)) {
          return { success: false, error: 'You lack the configured role required for this command.' };
        }
        if (!moderator.permissions.has(PermissionFlagsBits.ModerateMembers)) {
          return { success: false, error: 'You do not have permission to warn members.' };
        }
        await (prisma as any).warning.create({
          data: { guildId: guild.id, userId: targetUser.id, reason }
        });
        actionDesc = 'Warn';
      } 
      else if (action === 'TIMEOUT') {
        if (!checkRole('timeout', settings?.modRole)) {
          return { success: false, error: 'You lack the configured role required for this command.' };
        }
        if (!moderator.permissions.has(PermissionFlagsBits.ModerateMembers)) {
          return { success: false, error: 'You do not have permission to timeout members.' };
        }
        if (!targetMember) return { success: false, error: 'User is not in the server.' };
        if (!durationStr) return { success: false, error: 'Duration is required for timeout.' };
        
        const ms = parseDuration(durationStr);
        if (!ms || !validateTimeoutDuration(ms)) {
          return { success: false, error: 'Invalid duration. Max timeout is 28 days. Format: 10m, 1h, 1d.' };
        }
        actionMs = ms;
        
        await targetMember.timeout(ms, reason);
        actionDesc = 'Timeout';
        parsedDurationLabel = durationStr;
      } 
      else if (action === 'KICK') {
        if (!checkRole('kick', settings?.seniorModRole)) {
          return { success: false, error: 'You lack the configured role required for this command.' };
        }
        if (!moderator.permissions.has(PermissionFlagsBits.KickMembers)) {
          return { success: false, error: 'You do not have permission to kick members.' };
        }
        if (!targetMember) return { success: false, error: 'User is not in the server.' };
        
        await targetMember.kick(reason);
        actionDesc = 'Kick';
      } 
      else if (action === 'BAN') {
        if (!checkRole('ban', settings?.adminRole)) {
          return { success: false, error: 'You lack the configured role required for this command.' };
        }
        if (!moderator.permissions.has(PermissionFlagsBits.BanMembers)) {
          return { success: false, error: 'You do not have permission to ban members.' };
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

      // DM the target user (silently fail if DMs are closed)
      try {
        const dmVerbs: Record<ModerationAction, string> = {
          WARN: `You were warned in ${guild.name}.`,
          TIMEOUT: `You were muted in ${guild.name}.`,
          KICK: `You were kicked from ${guild.name}.`,
          BAN: `You were banned from ${guild.name}.`,
        };
        await targetUser.send(`${dmVerbs[action]}\nReason: ${reason}`);
      } catch {
        // User has DMs closed — silently continue
      }

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
}

export const moderationService = new ModerationService();
