import { Client } from 'pg';
import { prisma } from '@niko/db';

export class CacheManager {
  private guildSettingsCache = new Map<string, { data: any, expiresAt: number }>();
  private afkCache = new Map<string, { data: any, expiresAt: number }>();
  private pgClient: Client | null = null;
  private readonly TTL_MS = 60000; // 60 seconds

  constructor() {
    this.initPgListener().catch(console.error);
  }

  private async initPgListener() {
    if (!process.env.DIRECT_URL) return;

    this.pgClient = new Client({
      connectionString: process.env.DIRECT_URL
    });

    await this.pgClient.connect();
    
    this.pgClient.on('notification', (msg) => {
      if (msg.channel === 'cache_invalidate') {
        const payload = msg.payload; // expect format: "type:id"
        if (!payload) return;
        
        const [type, id] = payload.split(':');
        if (type === 'guildSettings') {
          this.guildSettingsCache.delete(id);
          console.log(`[Cache] Invalidated guild settings for ${id}`);
        } else if (type === 'afk') {
          this.afkCache.delete(id);
          console.log(`[Cache] Invalidated AFK for ${id}`);
        }
      }
    });

    await this.pgClient.query('LISTEN cache_invalidate');
    console.log('[Cache] Listening for PostgreSQL cache invalidations');
  }

  // GUILD SETTINGS
  public async getGuildSettings(guildId: string) {
    const cached = this.guildSettingsCache.get(guildId);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.data;
    }

    const settings = await prisma.guildSetting.findUnique({ where: { guildId } });
    this.guildSettingsCache.set(guildId, {
      data: settings,
      expiresAt: Date.now() + this.TTL_MS
    });

    return settings;
  }

  public invalidateGuildSettings(guildId: string) {
    this.guildSettingsCache.delete(guildId);
    this.broadcastInvalidate('guildSettings', guildId);
  }

  // AFK STATUS
  public async getAfkStatus(userId: string) {
    const cached = this.afkCache.get(userId);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.data;
    }

    const afk = await prisma.afkStatus.findUnique({ where: { userId } });
    this.afkCache.set(userId, {
      data: afk,
      expiresAt: Date.now() + this.TTL_MS
    });

    return afk;
  }

  public invalidateAfkStatus(userId: string) {
    this.afkCache.delete(userId);
    this.broadcastInvalidate('afk', userId);
  }

  public setAfkCacheLocally(userId: string, data: any) {
    this.afkCache.set(userId, { data, expiresAt: Date.now() + this.TTL_MS });
  }

  private async broadcastInvalidate(type: string, id: string) {
    try {
      await prisma.$executeRawUnsafe(`NOTIFY cache_invalidate, '${type}:${id}'`);
    } catch (error) {
      console.error(`[Cache] Failed to broadcast invalidation:`, error);
    }
  }
}

export const cache = new CacheManager();
