import { Client, Guild, GuildMember, Message, User } from 'discord.js';
import { prisma } from '@niko/db';
import { cache } from '../cache/CacheManager';

export enum ThreatLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

class SentinelService {
  private joinCache: Map<string, number[]> = new Map(); // guildId -> timestamps
  private messageCache: Map<string, number[]> = new Map(); // authorId -> timestamps

  public async evaluateJoin(member: GuildMember) {
    const guildId = member.guild.id;
    const now = Date.now();
    
    const settings = await cache.getGuildSettings(guildId);
    if (!settings || !settings.antiRaidEnabled) return;

    // Track join rate
    let joins = this.joinCache.get(guildId) || [];
    joins = joins.filter(t => now - t < 10000); // within last 10 seconds
    joins.push(now);
    this.joinCache.set(guildId, joins);

    // If more than 5 joins in 10 seconds -> RAID DETECTED
    if (joins.length >= 5) {
      await this.triggerRaidMitigation(member.guild);
    }
  }

  public async evaluateMessage(message: Message) {
    if (message.author.bot || !message.guild) return;

    const authorId = message.author.id;
    const guildId = message.guild.id;
    const now = Date.now();

    const settings = await cache.getGuildSettings(guildId);
    if (!settings || !settings.antiSpamEnabled) return;

    let msgs = this.messageCache.get(authorId) || [];
    msgs = msgs.filter(t => now - t < 5000); // within last 5 seconds
    msgs.push(now);
    this.messageCache.set(authorId, msgs);

    if (msgs.length >= 6) {
      // Spam detected
      await message.member?.timeout(60 * 1000, 'Niko Sentinel: Anti-Spam Triggered').catch(() => null);
      await prisma.securityEvent.create({
        data: {
          guildId,
          type: 'SPAM',
          severity: ThreatLevel.MEDIUM,
          description: `User ${message.author.tag} was timed out for 60 seconds due to spamming.`
        }
      });
    }
  }

  private async triggerRaidMitigation(guild: Guild) {
    console.log(`[Sentinel] RAID DETECTED ON ${guild.name}`);
    
    // 1. Log Event
    await prisma.securityEvent.create({
      data: {
        guildId: guild.id,
        type: 'RAID_JOIN',
        severity: ThreatLevel.CRITICAL,
        description: 'High volume of rapid joins detected. Potential raid.'
      }
    });

    // 2. Active Raid Event
    await prisma.raidEvent.create({
      data: {
        guildId: guild.id,
        status: 'ACTIVE'
      }
    });

    // 3. Automated Mitigation (e.g. Pause invites if possible, or set Verification Level to highest)
    try {
      await guild.setVerificationLevel(4, 'Niko Sentinel: Anti-Raid Mitigation Activated');
    } catch (e) {
      console.error('Failed to elevate verification level', e);
    }
  }
}

export const sentinel = new SentinelService();
