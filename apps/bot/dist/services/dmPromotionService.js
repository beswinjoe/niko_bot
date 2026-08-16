"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dmPromotionService = exports.DMPromotionService = void 0;
const db_1 = require("@niko/db");
const discord_js_1 = require("discord.js");
class DMPromotionService {
    // A simple in-memory cache of active DM promotions to avoid DB hits on every command
    activePromotions = [];
    lastFetchedAt = 0;
    CACHE_TTL = 1000 * 60 * 5; // 5 minutes
    constructor() {
        this.refreshCache();
    }
    async refreshCache() {
        try {
            this.activePromotions = await db_1.prisma.featuredPromotion.findMany({
                where: {
                    promotionType: 'DM_PROMOTION',
                    status: 'ACTIVE',
                    expiresAt: { gt: new Date() }
                },
                include: { guild: true }
            });
            this.lastFetchedAt = Date.now();
        }
        catch (error) {
            console.error('[DMPromotionService] Error refreshing cache:', error);
        }
    }
    async getActivePromotions() {
        if (Date.now() - this.lastFetchedAt > this.CACHE_TTL) {
            await this.refreshCache();
        }
        return this.activePromotions;
    }
    /**
     * Safely called at the end of every successful command.
     * Runs asynchronously, never blocking the main event loop.
     */
    async triggerPromotionCheck(message) {
        try {
            const promotions = await this.getActivePromotions();
            if (promotions.length === 0)
                return;
            const randomPromotion = promotions[Math.floor(Math.random() * promotions.length)];
            const userPref = await db_1.prisma.userDMPromotion.findUnique({
                where: { userId: message.author.id }
            });
            // Opted out
            if (userPref?.optOut)
                return;
            // 7 day cooldown check
            const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
            if (userPref?.lastPromotionAt) {
                if (Date.now() - userPref.lastPromotionAt.getTime() < SEVEN_DAYS_MS) {
                    return;
                }
            }
            const listing = await db_1.prisma.serverListing.findUnique({
                where: { guildId: randomPromotion.guildId }
            });
            const inviteUrl = listing?.inviteUrl || 'https://discord.gg/niko';
            // Send the DM
            const embed = new discord_js_1.EmbedBuilder()
                .setColor('#7C3AED')
                .setTitle('Featured Community Recommendation')
                .setDescription(randomPromotion.promotionalMessage || `Check out **${randomPromotion.guild.name}**!`)
                .setFooter({ text: 'To opt out of recommendations, use $dmad optout in any server.' })
                .addFields({ name: 'Join Server', value: `[Click Here to Join](${inviteUrl})` });
            try {
                await message.author.send({ embeds: [embed] });
                // Update successful metrics
                await db_1.prisma.$transaction([
                    db_1.prisma.userDMPromotion.upsert({
                        where: { userId: message.author.id },
                        update: { lastPromotionAt: new Date() },
                        create: { userId: message.author.id, lastPromotionAt: new Date() }
                    }),
                    db_1.prisma.featuredPromotion.update({
                        where: { id: randomPromotion.id },
                        data: { dmSent: { increment: 1 } }
                    })
                ]);
            }
            catch (dmError) {
                // Silently ignore closed DMs
            }
        }
        catch (error) {
            // Catch any unexpected DB errors and swallow them to protect the bot's stability
            console.error('[DMPromotionService] Trigger check error:', error);
        }
    }
    async optOut(userId) {
        await db_1.prisma.userDMPromotion.upsert({
            where: { userId },
            update: { optOut: true },
            create: { userId, optOut: true }
        });
    }
    async optIn(userId) {
        await db_1.prisma.userDMPromotion.upsert({
            where: { userId },
            update: { optOut: false },
            create: { userId, optOut: false }
        });
    }
}
exports.DMPromotionService = DMPromotionService;
exports.dmPromotionService = new DMPromotionService();
