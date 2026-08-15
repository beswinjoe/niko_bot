import { boss } from './index';
import { client } from '../client';

export interface UnbanJobData {
  guildId: string;
  userId: string;
}

export async function initUnbanWorker() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await boss.work('unban', async (jobs: any) => {
    const jobList = Array.isArray(jobs) ? jobs : [jobs];
    
    for (const job of jobList) {
      const { guildId, userId } = job.data as UnbanJobData;

    try {
      const guild = await client.guilds.fetch(guildId).catch(() => null);
      if (!guild) {
        console.error(`[Unban Worker] Guild ${guildId} not found.`);
        return;
      }

      await guild.members.unban(userId, 'Temporary ban expired.').catch((err) => {
        // Ignore if user is not banned or unknown user
        if (err.code === 10026 || err.code === 10013) return;
        throw err;
      });

      console.log(`[Unban Worker] Successfully unbanned user ${userId} in guild ${guildId}`);
    } catch (error) {
      console.error(`[Unban Worker] Error unbanning user ${userId} in guild ${guildId}:`, error);
      throw error;
    }
    }
  });
}
