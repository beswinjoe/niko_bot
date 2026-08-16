"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intelligence = exports.ServerIntelligence = void 0;
const db_1 = require("@niko/db");
const discord_js_1 = require("discord.js");
const CacheManager_1 = require("../cache/CacheManager");
class ServerIntelligence {
    activityBatch = new Map();
    constructor() {
        setInterval(() => this.flushActivityBatch(), 60000);
    }
    /**
     * Calculates a server health score from 0 to 100 based on configuration and security events.
     */
    async calculateHealthScore(guildId) {
        const settings = await CacheManager_1.cache.getGuildSettings(guildId);
        if (!settings) {
            return {
                score: 50,
                recommendations: [] // Dashboard will handle no settings separately
            };
        }
        let score = 100;
        const recommendations = [];
        if (!settings.antiRaidEnabled) {
            score -= 15;
            recommendations.push({
                id: 'enable_anti_raid',
                title: 'Enable Anti-Raid',
                description: 'Protect your server against mass joins and automated bot raids.',
                action: { type: 'TOGGLE_SETTING', field: 'antiRaidEnabled', value: true },
                requiresConfirmation: true,
                impact: 'high'
            });
        }
        if (!settings.antiNukeEnabled) {
            score -= 20;
            recommendations.push({
                id: 'enable_anti_nuke',
                title: 'Enable Anti-Nuke',
                description: 'Prevent malicious users from mass-deleting channels and roles.',
                action: { type: 'TOGGLE_SETTING', field: 'antiNukeEnabled', value: true },
                requiresConfirmation: true,
                impact: 'high'
            });
        }
        if (!settings.aiModerationEnabled) {
            score -= 10;
            recommendations.push({
                id: 'enable_ai_moderation',
                title: 'Enable AI Moderation',
                description: 'Use intelligent threat detection to analyze messages.',
                action: { type: 'TOGGLE_SETTING', field: 'aiModerationEnabled', value: true },
                requiresConfirmation: false,
                impact: 'medium'
            });
        }
        if (!settings.verificationSystem) {
            score -= 15;
            recommendations.push({
                id: 'enable_verification',
                title: 'Enable Verification System',
                description: 'Require new members to verify before accessing the server.',
                action: { type: 'TOGGLE_SETTING', field: 'verificationSystem', value: true },
                requiresConfirmation: true,
                impact: 'high'
            });
        }
        if (!settings.modLogChannelId) {
            score -= 5;
            recommendations.push({
                id: 'create_mod_log',
                title: 'Set up a Moderation Log',
                description: 'Create a dedicated channel to track moderation actions and security events.',
                action: { type: 'CREATE_LOG_CHANNEL' },
                requiresConfirmation: false,
                impact: 'medium'
            });
        }
        if (!settings.mutedRole) {
            score -= 5;
            recommendations.push({
                id: 'create_mute_role',
                title: 'Configure a Mute Role',
                description: 'Create a dedicated Muted role required for the mute/timeout command.',
                action: { type: 'CREATE_MUTE_ROLE' },
                requiresConfirmation: false,
                impact: 'high'
            });
        }
        // Check recent security events
        const recentEvents = await db_1.prisma.securityEvent.count({
            where: {
                guildId,
                createdAt: {
                    gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
                }
            }
        });
        if (recentEvents > 10) {
            score -= 10;
            recommendations.push({
                id: 'review_security_events',
                title: 'High Security Threat Level',
                description: 'High number of recent security events detected. Review active threats.',
                action: { type: 'TOGGLE_SETTING', field: '_none', value: false }, // No automatic fix
                requiresConfirmation: false,
                impact: 'high'
            });
        }
        return {
            score: Math.max(0, score),
            recommendations
        };
    }
    async trackMessageActivity(guildId, channelId) {
        const now = new Date();
        now.setMinutes(0, 0, 0); // Round down to hour for timeseries data
        const key = `${guildId}:${channelId}:${now.toISOString()}`;
        const current = this.activityBatch.get(key) || 0;
        this.activityBatch.set(key, current + 1);
    }
    async flushActivityBatch() {
        if (this.activityBatch.size === 0)
            return;
        // Swap maps to avoid locks
        const batch = this.activityBatch;
        this.activityBatch = new Map();
        for (const [key, count] of batch.entries()) {
            const [guildId, channelId, timestampStr] = key.split(':');
            // The ISO string can have colons in it so we should split correctly or join the rest
            const firstColon = key.indexOf(':');
            const secondColon = key.indexOf(':', firstColon + 1);
            const gid = key.slice(0, firstColon);
            const cid = key.slice(firstColon + 1, secondColon);
            const ts = new Date(key.slice(secondColon + 1));
            try {
                await db_1.prisma.messageActivity.upsert({
                    where: {
                        guildId_channelId_timestamp: {
                            guildId: gid,
                            channelId: cid,
                            timestamp: ts
                        }
                    },
                    update: {
                        count: { increment: count }
                    },
                    create: {
                        guildId: gid,
                        channelId: cid,
                        timestamp: ts,
                        count
                    }
                });
            }
            catch (error) {
                console.error('[Intelligence] Failed to flush message activity', error);
            }
        }
    }
    async getWhyContext(guildId, userId) {
        const recentCases = await db_1.prisma.moderationCase.findMany({
            where: { guildId, userId },
            orderBy: { createdAt: 'desc' },
            take: 3
        });
        if (recentCases.length === 0) {
            return { success: false, error: 'No recent moderation context found for this user.' };
        }
        const embed = new discord_js_1.EmbedBuilder()
            .setColor('#3B82F6')
            .setTitle('Niko Intelligence: Why?')
            .setDescription(`Recent moderation context for <@${userId}>:`)
            .addFields(recentCases.map((c) => ({
            name: `${c.type} on ${c.createdAt.toLocaleDateString()}`,
            value: `Reason: ${c.reason}\nModerator: <@${c.moderatorId}>`
        })));
        return { success: true, embed };
    }
    async getHistory(guildId, userId) {
        const cases = await db_1.prisma.moderationCase.findMany({
            where: { guildId, userId },
            orderBy: { createdAt: 'desc' },
            take: 10
        });
        if (cases.length === 0) {
            return { success: false, error: 'User has a clean record. No moderation history found.' };
        }
        const embed = new discord_js_1.EmbedBuilder()
            .setColor('#3B82F6')
            .setTitle('Niko Intelligence: History')
            .setDescription(`Moderation history for <@${userId}>:`)
            .addFields(cases.map((c) => ({
            name: `Case #${c.id} - ${c.type}`,
            value: `Reason: ${c.reason}\nDate: ${c.createdAt.toLocaleDateString()}\nMod: <@${c.moderatorId}>`
        })));
        return { success: true, embed };
    }
    async getRecommendation(guildId) {
        const health = await this.calculateHealthScore(guildId);
        const embed = new discord_js_1.EmbedBuilder()
            .setColor(health.score >= 80 ? '#10B981' : (health.score >= 50 ? '#F59E0B' : '#EF4444'))
            .setTitle('Niko Intelligence: Recommendation')
            .setDescription(`Server Security Score: **${health.score}/100**`)
            .addFields({
            name: 'Recommendations',
            value: health.recommendations.length > 0
                ? health.recommendations.map(r => `• ${r.title}`).join('\n')
                : 'All security settings look good!'
        });
        return { success: true, embed };
    }
}
exports.ServerIntelligence = ServerIntelligence;
exports.intelligence = new ServerIntelligence();
