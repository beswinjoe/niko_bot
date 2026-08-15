'use server';

import { PrismaClient } from '@niko/db';
import { getSession } from '@/lib/session';
import { hasManageGuildPermission, getDiscordUserGuilds } from '@/lib/discord';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

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
    throw new Error('Failed to fetch roles from Discord');
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

  const cmdPerms = await (prisma as any).roleCommandPermission.findMany({
    where: { guildId }
  });

  return { setting, cmdPerms };
}

export async function saveRoleSettings(guildId: string, data: any) {
  const session = await getSession();
  const cookieStore = await cookies();
  const discordToken = cookieStore.get('discord_token')?.value;

  if (!session || !discordToken) throw new Error('Unauthorized');

  const guilds = await getDiscordUserGuilds(discordToken);
  const targetGuild = guilds.find(g => g.id === guildId);

  if (!targetGuild || (!targetGuild.owner && !hasManageGuildPermission(targetGuild.permissions))) {
    throw new Error('You do not have permission to manage this server.');
  }

  // Update base guild settings
  await (prisma as any).guildSetting.upsert({
    where: { guildId },
    update: {
      modRole: data.modRole || null,
      seniorModRole: data.seniorModRole || null,
      adminRole: data.adminRole || null,
      mutedRole: data.mutedRole || null,
    },
    create: {
      guildId,
      modRole: data.modRole || null,
      seniorModRole: data.seniorModRole || null,
      adminRole: data.adminRole || null,
      mutedRole: data.mutedRole || null,
    }
  });

  // Recreate command permissions
  await (prisma as any).roleCommandPermission.deleteMany({
    where: { guildId }
  });

  const createData = [];
  const commands = ['warn', 'timeout', 'kick', 'ban', 'purge', 'security'];
  for (const cmd of commands) {
    if (data.commandRoles && Array.isArray(data.commandRoles[cmd])) {
      for (const roleId of data.commandRoles[cmd]) {
        if (roleId) createData.push({ guildId, roleId, command: cmd });
      }
    }
  }

  if (createData.length > 0) {
    await (prisma as any).roleCommandPermission.createMany({
      data: createData,
      skipDuplicates: true
    });
  }

  return { success: true };
}
