'use server';

import { prisma } from "@niko/db";
import { revalidatePath } from 'next/cache';
import { authorizeGuildAction } from '@/lib/auth';
import { logDashboardAction } from '@/lib/audit';



const BOT_TOKEN = process.env.DISCORD_TOKEN;

export type RecommendationAction = 
  | { type: 'TOGGLE_SETTING'; field: string; value: boolean | string }
  | { type: 'CREATE_MUTE_ROLE' }
  | { type: 'CREATE_LOG_CHANNEL' };

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  action: RecommendationAction;
  requiresConfirmation: boolean;
  impact: 'high' | 'medium' | 'low';
}

export async function getHealthAndRecommendations(guildId: string): Promise<{ score: number; recommendations: Recommendation[] }> {
  const settings = await prisma.guildSetting.findUnique({ where: { guildId } });
  if (!settings) {
    return { score: 50, recommendations: [] };
  }

  let score = 100;
  const recommendations: Recommendation[] = [];

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

  const recentEvents = await prisma.securityEvent.count({
    where: {
      guildId,
      createdAt: {
        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      }
    }
  });

  if (recentEvents > 10) {
    score -= 10;
    recommendations.push({
      id: 'review_security_events',
      title: 'High Security Threat Level',
      description: 'High number of recent security events detected. Review active threats.',
      action: { type: 'TOGGLE_SETTING', field: '_none', value: false },
      requiresConfirmation: false,
      impact: 'high'
    });
  }

  return {
    score: Math.max(0, score),
    recommendations
  };
}

export async function executeToggleSetting(guildId: string, field: string, value: boolean | string) {
  const { session } = await authorizeGuildAction(guildId);
  if (field === '_none') return { success: true };
  
  await prisma.guildSetting.upsert({
    where: { guildId },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: { [field]: value } as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create: { guildId, [field]: value } as any
  });
  
  await prisma.$executeRawUnsafe(`NOTIFY cache_invalidate, 'guildSettings:${guildId}'`);

  await logDashboardAction({
    guildId,
    actorUserId: session.userId,
    action: `TOGGLE_SETTING`,
    targetType: 'SETTING',
    targetId: field,
    metadata: { value }
  });
  
  revalidatePath(`/dashboard/${guildId}`);
  return { success: true };
}

export async function executeCreateMuteRole(guildId: string) {
  const { session } = await authorizeGuildAction(guildId);
  if (!BOT_TOKEN) throw new Error('Bot token not configured');
  
  const settings = await prisma.guildSetting.findUnique({ where: { guildId } });
  
  if (settings?.mutedRole) {
    const checkRes = await fetch(`https://discord.com/api/v10/guilds/${guildId}/roles`, {
      headers: { 'Authorization': `Bot ${BOT_TOKEN}` }
    });
    if (checkRes.ok) {
      const roles = await checkRes.json();
      if (roles.some((r: Record<string, unknown>) => r.id === settings.mutedRole)) {
        return { success: true, roleId: settings.mutedRole };
      }
    }
  }

  const response = await fetch(`https://discord.com/api/v10/guilds/${guildId}/roles`, {
    method: 'POST',
    headers: {
      'Authorization': `Bot ${BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Muted',
      permissions: '0', // No permissions
      color: 0x808080
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Discord API Error: ${errorText}`);
  }

  const role = await response.json();

  await prisma.guildSetting.upsert({
    where: { guildId },
    update: { mutedRole: role.id },
    create: { guildId, mutedRole: role.id }
  });
  
  await prisma.$executeRawUnsafe(`NOTIFY cache_invalidate, 'guildSettings:${guildId}'`);

  await logDashboardAction({
    guildId,
    actorUserId: session.userId,
    action: `CREATE_MUTE_ROLE`,
    targetType: 'ROLE',
    targetId: role.id
  });

  revalidatePath(`/dashboard/${guildId}`);
  return { success: true, roleId: role.id };
}

export async function executeCreateLogChannel(guildId: string) {
  const { session } = await authorizeGuildAction(guildId);
  if (!BOT_TOKEN) throw new Error('Bot token not configured');

  const settings = await prisma.guildSetting.findUnique({ where: { guildId } });

  if (settings?.modLogChannelId) {
    const checkRes = await fetch(`https://discord.com/api/v10/channels/${settings.modLogChannelId}`, {
      headers: { 'Authorization': `Bot ${BOT_TOKEN}` }
    });
    if (checkRes.ok) {
      return { success: true, channelId: settings.modLogChannelId };
    }
  }

  const response = await fetch(`https://discord.com/api/v10/guilds/${guildId}/channels`, {
    method: 'POST',
    headers: {
      'Authorization': `Bot ${BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'mod-logs',
      type: 0 // GUILD_TEXT
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Discord API Error: ${errorText}`);
  }

  const channel = await response.json();

  await prisma.guildSetting.upsert({
    where: { guildId },
    update: { modLogChannelId: channel.id },
    create: { guildId, modLogChannelId: channel.id }
  });

  await logDashboardAction({
    guildId,
    actorUserId: session.userId,
    action: `CREATE_LOG_CHANNEL`,
    targetType: 'CHANNEL',
    targetId: channel.id
  });

  revalidatePath(`/dashboard/${guildId}`);
  return { success: true, channelId: channel.id };
}
