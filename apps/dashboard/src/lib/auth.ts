import { getSession } from '@/lib/session';
import { getDiscordUserGuilds, hasManageGuildPermission } from '@/lib/discord';
import { cookies } from 'next/headers';
import { prisma } from "@niko/db";



export async function authorizeGuildAction(guildId: string) {
  const session = await getSession();
  const cookieStore = await cookies();
  const discordToken = cookieStore.get('discord_token')?.value;

  if (!session || !discordToken) {
    throw new Error('Unauthorized: Missing session or token');
  }

  const guilds = await getDiscordUserGuilds(discordToken);
  const targetGuild = guilds.find(g => g.id === guildId);

  if (!targetGuild || (!targetGuild.owner && !hasManageGuildPermission(targetGuild.permissions))) {
    throw new Error('Forbidden: You do not have permission to manage this server');
  }

  const dbGuild = await prisma.guild.findUnique({
    where: { id: guildId }
  });

  if (!dbGuild) {
    throw new Error('Not Installed: Niko is not installed in this server');
  }

  return { session, targetGuild, dbGuild };
}
