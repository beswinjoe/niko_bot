import { authorizeGlobalAdmin } from '@/lib/auth';
import { prisma } from '@niko/db';
import PromotionsClient from './PromotionsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Promotions | Niko',
};

export default async function AdminPromotionsPage() {
  await authorizeGlobalAdmin();

  const promotions = await prisma.featuredPromotion.findMany({
    orderBy: { createdAt: 'desc' },
    include: { guild: true }
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Promotions Management</h1>
        <p className="text-muted-foreground">Admin-only interface for managing paid featured promotions.</p>
      </div>

      <PromotionsClient initialPromotions={promotions} />
    </div>
  );
}
