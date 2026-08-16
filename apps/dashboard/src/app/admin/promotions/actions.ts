'use server';

import { authorizeGlobalAdmin } from '@/lib/auth';
import { prisma } from '@niko/db';
import { revalidatePath } from 'next/cache';

export async function createPromotion(data: {
  guildId: string;
  promotionType: string;
  status: string;
  expiresAt: string;
  promotionalMessage?: string;
}) {
  const session = await authorizeGlobalAdmin();

  // Validate guild exists
  const guild = await prisma.guild.findUnique({ where: { id: data.guildId } });
  if (!guild) {
    throw new Error('Guild not found in database. The server must have Niko installed.');
  }

  await prisma.featuredPromotion.create({
    data: {
      guildId: data.guildId,
      promotionType: data.promotionType,
      status: data.status,
      expiresAt: new Date(data.expiresAt),
      promotionalMessage: data.promotionalMessage,
      approvedBy: session.user.id
    }
  });

  revalidatePath('/admin/promotions');
  revalidatePath('/servers');
  return { success: true };
}

export async function updatePromotion(id: number, data: {
  status: string;
  expiresAt: string;
  promotionalMessage?: string;
}) {
  await authorizeGlobalAdmin();

  await prisma.featuredPromotion.update({
    where: { id },
    data: {
      status: data.status,
      expiresAt: new Date(data.expiresAt),
      promotionalMessage: data.promotionalMessage,
    }
  });

  revalidatePath('/admin/promotions');
  revalidatePath('/servers');
  return { success: true };
}
