"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUnbanWorker = initUnbanWorker;
const index_1 = require("./index");
const client_1 = require("../client");
async function initUnbanWorker() {
    await index_1.boss.createQueue('unban').catch(() => { });
    await index_1.boss.work('unban', { pollingIntervalSeconds: 30 }, async (jobs) => {
        const jobList = Array.isArray(jobs) ? jobs : [jobs];
        for (const job of jobList) {
            const { guildId, userId } = job.data;
            try {
                const guild = await client_1.client.guilds.fetch(guildId).catch(() => null);
                if (!guild) {
                    console.error(`[Unban Worker] Guild ${guildId} not found.`);
                    return;
                }
                await guild.members.unban(userId, 'Temporary ban expired.').catch((err) => {
                    // Ignore if user is not banned or unknown user
                    if (err.code === 10026 || err.code === 10013)
                        return;
                    throw err;
                });
                console.log(`[Unban Worker] Successfully unbanned user ${userId} in guild ${guildId}`);
            }
            catch (error) {
                console.error(`[Unban Worker] Error unbanning user ${userId} in guild ${guildId}:`, error);
                throw error;
            }
        }
    });
}
