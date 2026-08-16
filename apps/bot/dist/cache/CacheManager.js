"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = exports.CacheManager = void 0;
const pg_1 = require("pg");
const db_1 = require("@niko/db");
class CacheManager {
    guildSettingsCache = new Map();
    afkCache = new Map();
    pgClient = null;
    TTL_MS = 60000; // 60 seconds
    constructor() {
        this.initPgListener().catch(console.error);
    }
    async initPgListener() {
        if (!process.env.DIRECT_URL)
            return;
        this.pgClient = new pg_1.Client({
            connectionString: process.env.DIRECT_URL
        });
        await this.pgClient.connect();
        this.pgClient.on('notification', (msg) => {
            if (msg.channel === 'cache_invalidate') {
                const payload = msg.payload; // expect format: "type:id"
                if (!payload)
                    return;
                const [type, id] = payload.split(':');
                if (type === 'guildSettings') {
                    this.guildSettingsCache.delete(id);
                    console.log(`[Cache] Invalidated guild settings for ${id}`);
                }
                else if (type === 'afk') {
                    this.afkCache.delete(id);
                    console.log(`[Cache] Invalidated AFK for ${id}`);
                }
            }
        });
        await this.pgClient.query('LISTEN cache_invalidate');
        console.log('[Cache] Listening for PostgreSQL cache invalidations');
    }
    // GUILD SETTINGS
    async getGuildSettings(guildId) {
        const cached = this.guildSettingsCache.get(guildId);
        if (cached && cached.expiresAt > Date.now()) {
            return cached.data;
        }
        const settings = await db_1.prisma.guildSetting.findUnique({ where: { guildId } });
        this.guildSettingsCache.set(guildId, {
            data: settings,
            expiresAt: Date.now() + this.TTL_MS
        });
        return settings;
    }
    invalidateGuildSettings(guildId) {
        this.guildSettingsCache.delete(guildId);
        this.broadcastInvalidate('guildSettings', guildId);
    }
    // AFK STATUS
    async getAfkStatus(userId) {
        const cached = this.afkCache.get(userId);
        if (cached && cached.expiresAt > Date.now()) {
            return cached.data;
        }
        const afk = await db_1.prisma.afkStatus.findUnique({ where: { userId } });
        this.afkCache.set(userId, {
            data: afk,
            expiresAt: Date.now() + this.TTL_MS
        });
        return afk;
    }
    invalidateAfkStatus(userId) {
        this.afkCache.delete(userId);
        this.broadcastInvalidate('afk', userId);
    }
    setAfkCacheLocally(userId, data) {
        this.afkCache.set(userId, { data, expiresAt: Date.now() + this.TTL_MS });
    }
    async broadcastInvalidate(type, id) {
        try {
            await db_1.prisma.$executeRawUnsafe(`NOTIFY cache_invalidate, '${type}:${id}'`);
        }
        catch (error) {
            console.error(`[Cache] Failed to broadcast invalidation:`, error);
        }
    }
}
exports.CacheManager = CacheManager;
exports.cache = new CacheManager();
