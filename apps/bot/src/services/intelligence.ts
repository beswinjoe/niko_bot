import { prisma } from '@niko/db';

export class ServerIntelligence {
  /**
   * Calculates a server health score from 0 to 100 based on configuration and security events.
   */
  public async calculateHealthScore(guildId: string): Promise<{ score: number; recommendations: string[] }> {
    const settings = await prisma.guildSetting.findUnique({ where: { guildId } });
    if (!settings) {
      return { score: 50, recommendations: ['Configure server security settings'] };
    }

    let score = 100;
    const recommendations: string[] = [];

    if (!settings.antiRaidEnabled) {
      score -= 15;
      recommendations.push('Enable Anti-Raid to protect against mass joins');
    }
    if (!settings.antiNukeEnabled) {
      score -= 20;
      recommendations.push('Enable Anti-Nuke to protect channels and roles');
    }
    if (!settings.aiModerationEnabled) {
      score -= 10;
      recommendations.push('Enable AI Moderation for intelligent threat detection');
    }
    if (!settings.verificationSystem) {
      score -= 15;
      recommendations.push('Enable Verification System for new members');
    }
    if (!settings.modLogChannelId) {
      score -= 5;
      recommendations.push('Set up a Moderation Log channel');
    }

    // Check recent security events
    const recentEvents = await prisma.securityEvent.count({
      where: {
        guildId,
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
        }
      }
    });

    if (recentEvents > 10) {
      score -= 10;
      recommendations.push('High number of recent security events. Review active threats.');
    }

    return {
      score: Math.max(0, score),
      recommendations
    };
  }

  public async trackMessageActivity(guildId: string, channelId: string) {
    const now = new Date();
    now.setMinutes(0, 0, 0); // Round down to hour for timeseries data

    // Atomic increment using upsert
    await prisma.messageActivity.upsert({
      where: {
        guildId_channelId_timestamp: {
          guildId,
          channelId,
          timestamp: now
        }
      },
      update: {
        count: { increment: 1 }
      },
      create: {
        guildId,
        channelId,
        timestamp: now,
        count: 1
      }
    });
  }
}

export const intelligence = new ServerIntelligence();
