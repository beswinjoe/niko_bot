"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAIModerationWorker = initAIModerationWorker;
const client_1 = require("../client");
const db_1 = require("@niko/db");
const index_1 = require("./index");
const CacheManager_1 = require("../cache/CacheManager");
// Simple mock for Gemini AI for the time being, to avoid hitting rate limits locally
// In production, this would call the actual Google Gemini API
async function classifyContent(content) {
    // Very basic mock logic
    const lower = content.toLowerCase();
    if (lower.includes('scam') || lower.includes('free nitro')) {
        return { isToxic: true, score: 95, reason: 'Scam/Spam detected' };
    }
    if (lower.includes('idiot') || lower.includes('stupid')) {
        return { isToxic: true, score: 85, reason: 'Toxicity detected' };
    }
    return { isToxic: false, score: 0, reason: '' };
}
async function initAIModerationWorker() {
    try {
        await index_1.boss.createQueue('ai-moderation');
    }
    catch (e) { }
    await index_1.boss.work('ai-moderation', { pollingIntervalSeconds: 30 }, async (jobs) => {
        // We can handle batch jobs or single jobs, pg-boss passes an array by default in new versions
        // or a single job. Let's handle it assuming a single job or array.
        const jobList = Array.isArray(jobs) ? jobs : [jobs];
        for (const job of jobList) {
            const data = job.data;
            try {
                const classification = await classifyContent(data.content);
                if (classification.isToxic) {
                    const settings = await CacheManager_1.cache.getGuildSettings(data.guildId);
                    const threshold = settings?.aiActionThreshold || 80;
                    if (classification.score >= threshold) {
                        const channel = client_1.client.channels.cache.get(data.channelId);
                        if (channel) {
                            const message = await channel.messages.fetch(data.messageId).catch(() => null);
                            if (message) {
                                await message.delete().catch(() => null);
                                // Idempotency: pg-boss retry could trigger this again if it crashes after delete.
                                // We shouldn't duplicate the SecurityEvent. Let's use the job.id as a unique reference
                                // or just rely on pg-boss singleton properties when enqueuing.
                                await db_1.prisma.securityEvent.create({
                                    data: {
                                        guildId: data.guildId,
                                        type: 'AI_MODERATION',
                                        severity: 'HIGH',
                                        description: `Deleted message from ${data.authorTag} due to: ${classification.reason} (Score: ${classification.score}%)`
                                    }
                                });
                                if (settings?.aiLogChannelId) {
                                    const logChannel = client_1.client.channels.cache.get(settings.aiLogChannelId);
                                    if (logChannel) {
                                        await logChannel.send(`🤖 **AI Moderation Triggered**\nUser: ${data.authorTag}\nReason: ${classification.reason}\nConfidence: ${classification.score}%`);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            catch (err) {
                console.error(`Error processing ai-moderation job ${job.id}:`, err);
                throw err; // Will trigger a retry via pg-boss
            }
        }
    });
}
