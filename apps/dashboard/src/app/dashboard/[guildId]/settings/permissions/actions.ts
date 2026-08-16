'use server';

import { prisma } from "@niko/db";
import { getSession } from '@/lib/session';
import { authorizeGuildAction } from '@/lib/auth';
import { logDashboardAction } from '@/lib/audit';



export interface DiscordRole {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
}

export async function getGuildRoles(guildId: string): Promise<DiscordRole[]> {
  const token = process.env.DISCORD_TOKEN;
  if (!token) throw new Error('DISCORD_TOKEN is not configured');

  const res = await fetch(`https://discord.com/api/v10/guilds/${guildId}/roles`, {
    headers: {
      Authorization: `Bot ${token}`,
      'Content-Type': 'application/json'
    },
    next: { revalidate: 60 } // Cache for 60s
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Failed to fetch roles from Discord: ${res.status} ${text}`);
  }

  const roles: DiscordRole[] = await res.json();
  // Filter out the @everyone role (id === guildId) and sort by position descending
  return roles.filter(r => r.id !== guildId).sort((a, b) => b.position - a.position);
}

export async function getRoleSettings(guildId: string) {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');

  const setting = await prisma.guildSetting.findUnique({
    where: { guildId }
  });

  const cmdPerms = await prisma.roleCommandPermission.findMany({
    where: { guildId }
  });

  return { setting, cmdPerms };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function saveRoleSettings(guildId: string, data: any) {
  const { session } = await authorizeGuildAction(guildId);

  await prisma.guildSetting.upsert({
    where: { guildId },
    update: {
      mutedRole: data.mutedRole || null,
      publicListing: data.publicListing ?? false,
    },
    create: {
      guildId,
      mutedRole: data.mutedRole || null,
      publicListing: data.publicListing ?? false,
    }
  });

  await prisma.roleCommandPermission.deleteMany({
    where: { guildId }
  });

  const createData = [];
  const commands = ['warn', 'mute', 'kick', 'ban', 'unban', 'purge', 'security', 'rules', 'muterole', 'permissions'];
  for (const cmd of commands) {
    if (data.commandRoles && Array.isArray(data.commandRoles[cmd])) {
      for (const roleId of data.commandRoles[cmd]) {
        if (roleId) createData.push({ guildId, roleId, command: cmd });
      }
    }
  }

  if (createData.length > 0) {
    await prisma.roleCommandPermission.createMany({
      data: createData,
      skipDuplicates: true
    });
  }

  await prisma.$executeRawUnsafe(`NOTIFY cache_invalidate, 'guildSettings:${guildId}'`);

  await logDashboardAction({
    guildId,
    actorUserId: session.userId,
    action: 'UPDATE_ROLE_PERMISSIONS',
    targetType: 'PERMISSIONS',
    targetId: 'rolePermissions',
    metadata: {
      mutedRole: data.mutedRole,
      publicListing: data.publicListing,
      commandsUpdated: createData.length
    }
  });

  return { success: true };
}
