'use server';

import { authorizeGuildAction } from '@/lib/auth';
import { prisma } from '@niko/db';
import { revalidatePath } from 'next/cache';

export async function updateServerListing(guildId: string, data: {
  isPublic: boolean;
  description: string;
  category: string;
  language: string;
  inviteUrl: string;
  tags: string[];
}) {
  await authorizeGuildAction(guildId);

  // Requirement: Verify Niko is currently in the guild. 
  // We can trust the database Guild record for this context since the bot upserts on join/leave.
  const guild = await prisma.guild.findUnique({ where: { id: guildId } });
  if (!guild) {
    throw new Error("Guild not found. Ensure Niko is invited to the server.");
  }

  // Basic discord invite validation via regex
  if (data.isPublic && data.inviteUrl) {
    const inviteRegex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/[a-zA-Z0-9-]+/i;
    if (!inviteRegex.test(data.inviteUrl)) {
      throw new Error("Invalid Discord invite URL.");
    }
  }

  if (data.isPublic && !data.inviteUrl) {
    throw new Error("An invite URL is required to list your server publicly.");
  }

  await prisma.serverListing.upsert({
    where: { guildId },
    update: {
      isPublic: data.isPublic,
      description: data.description,
      category: data.category,
      language: data.language,
      inviteUrl: data.inviteUrl,
      tags: data.tags,
    },
    create: {
      guildId,
      isPublic: data.isPublic,
      description: data.description,
      category: data.category,
      language: data.language,
      inviteUrl: data.inviteUrl,
      tags: data.tags,
    }
  });

  revalidatePath(`/dashboard/${guildId}/discovery`);
  revalidatePath(`/servers`);
  revalidatePath(`/servers/${guildId}`);
  
  return { success: true };
}
