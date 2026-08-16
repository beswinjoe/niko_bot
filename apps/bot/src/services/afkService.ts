import { User, Message } from 'discord.js';
import { prisma } from '@niko/db';
import { cache } from '../cache/CacheManager';

export class AfkService {
  public async setAfk(userId: string, reason: string) {
    const finalReason = reason || 'AFK';
    await (prisma as any).afkStatus.upsert({
      where: { userId },
      update: { reason: finalReason, startedAt: new Date() },
      create: { userId, reason: finalReason }
    });
    cache.setAfkCacheLocally(userId, { userId, reason: finalReason, startedAt: new Date() });
    cache.invalidateAfkStatus(userId);
    return { success: true, message: `You are now AFK. Reason: ${finalReason}` };
  }

  public async removeAfk(userId: string) {
    const afk = await cache.getAfkStatus(userId);
    if (afk) {
      await (prisma as any).afkStatus.delete({ where: { userId } });
      cache.invalidateAfkStatus(userId);
      return { success: true, message: 'Your AFK status has been removed.' };
    } else {
      return { success: false, error: 'You are not currently AFK.' };
    }
  }

  public async getStatus(userId: string) {
    const afk = await cache.getAfkStatus(userId);
    if (afk) {
      const timeStr = this.formatDuration(Date.now() - afk.startedAt.getTime());
      return { success: true, message: `AFK: Yes\nReason: ${afk.reason || 'None'}\nDuration: ${timeStr}` };
    } else {
      return { success: false, error: 'You are not currently AFK.' };
    }
  }

  public async handleMessage(message: Message, prefix: string) {
    if (message.mentions.users.size > 0) {
      for (const [userId, user] of message.mentions.users) {
        if (user.bot || userId === message.author.id) continue;
        const mentionedAfk = await cache.getAfkStatus(userId);
        if (mentionedAfk) {
          const timeStr = this.formatDuration(Date.now() - mentionedAfk.startedAt.getTime());
          message.reply(`💤 <@${userId}> is AFK: ${mentionedAfk.reason || 'AFK'}\nAFK for ${timeStr}.`);
        }
      }
    }

    // Don't remove AFK if the user is running any command
    if (message.content.startsWith(prefix)) return;
    
    const afk = await cache.getAfkStatus(message.author.id);
    if (afk) {
      await (prisma as any).afkStatus.delete({ where: { userId: message.author.id } });
      cache.invalidateAfkStatus(message.author.id);
      const timeStr = this.formatDuration(Date.now() - afk.startedAt.getTime());
      message.reply(`👋 Welcome back, <@${message.author.id}>!\nYou were AFK for ${timeStr}.`);
    }
  }

  private formatDuration(ms: number) {
    const minutes = Math.floor(ms / (1000 * 60));
    const hours = Math.floor(ms / (1000 * 60 * 60));

    if (minutes < 1) return 'less than a minute';
    
    const parts = [];
    if (hours > 0) {
      parts.push(`${hours} hour${hours === 1 ? '' : 's'}`);
    }
    const remainingMinutes = minutes % 60;
    if (remainingMinutes > 0 || hours === 0) {
      parts.push(`${remainingMinutes} minute${remainingMinutes === 1 ? '' : 's'}`);
    }

    return parts.join(' ');
  }
}

export const afkService = new AfkService();
