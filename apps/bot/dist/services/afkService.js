"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afkService = exports.AfkService = void 0;
const db_1 = require("@niko/db");
const CacheManager_1 = require("../cache/CacheManager");
class AfkService {
    async setAfk(userId, reason) {
        const finalReason = reason || 'AFK';
        await db_1.prisma.afkStatus.upsert({
            where: { userId },
            update: { reason: finalReason, startedAt: new Date() },
            create: { userId, reason: finalReason }
        });
        CacheManager_1.cache.setAfkCacheLocally(userId, { userId, reason: finalReason, startedAt: new Date() });
        CacheManager_1.cache.invalidateAfkStatus(userId);
        return { success: true, message: `You are now AFK. Reason: ${finalReason}` };
    }
    async removeAfk(userId) {
        const afk = await CacheManager_1.cache.getAfkStatus(userId);
        if (afk) {
            await db_1.prisma.afkStatus.delete({ where: { userId } });
            CacheManager_1.cache.invalidateAfkStatus(userId);
            return { success: true, message: 'Your AFK status has been removed.' };
        }
        else {
            return { success: false, error: 'You are not currently AFK.' };
        }
    }
    async getStatus(userId) {
        const afk = await CacheManager_1.cache.getAfkStatus(userId);
        if (afk) {
            const timeStr = this.formatDuration(Date.now() - afk.startedAt.getTime());
            return { success: true, message: `AFK: Yes\nReason: ${afk.reason || 'None'}\nDuration: ${timeStr}` };
        }
        else {
            return { success: false, error: 'You are not currently AFK.' };
        }
    }
    async handleMessage(message, prefix) {
        if (message.mentions.users.size > 0) {
            for (const [userId, user] of message.mentions.users) {
                if (user.bot || userId === message.author.id)
                    continue;
                const mentionedAfk = await CacheManager_1.cache.getAfkStatus(userId);
                if (mentionedAfk) {
                    const timeStr = this.formatDuration(Date.now() - mentionedAfk.startedAt.getTime());
                    message.reply(`💤 <@${userId}> is AFK: ${mentionedAfk.reason || 'AFK'}\nAFK for ${timeStr}.`);
                }
            }
        }
        // Don't remove AFK if the user is running any command
        if (message.content.startsWith(prefix))
            return;
        const afk = await CacheManager_1.cache.getAfkStatus(message.author.id);
        if (afk) {
            await db_1.prisma.afkStatus.delete({ where: { userId: message.author.id } });
            CacheManager_1.cache.invalidateAfkStatus(message.author.id);
            const timeStr = this.formatDuration(Date.now() - afk.startedAt.getTime());
            message.reply(`👋 Welcome back, <@${message.author.id}>!\nYou were AFK for ${timeStr}.`);
        }
    }
    formatDuration(ms) {
        const minutes = Math.floor(ms / (1000 * 60));
        const hours = Math.floor(ms / (1000 * 60 * 60));
        if (minutes < 1)
            return 'less than a minute';
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
exports.AfkService = AfkService;
exports.afkService = new AfkService();
