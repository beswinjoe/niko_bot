import { Metadata } from 'next';
import { prisma } from '@niko/db';
import { authorizeGuildAction } from '@/lib/auth';
import DiscoveryClient from './DiscoveryClient';

export const metadata: Metadata = {
  title: 'Server Discovery | Niko Dashboard',
  description: 'Manage your public server listing on the Niko directory.',
};

export default async function DiscoveryPage({ params }: { params: Promise<{ guildId: string }> }) {
  const { guildId } = await params;
  await authorizeGuildAction(guildId);

  const listing = await prisma.serverListing.findUnique({
    where: { guildId }
  });

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Server Discovery</h1>
        <p className="text-muted-foreground">
          Configure how your server appears on the public Niko Server Directory.
        </p>
      </div>

      <DiscoveryClient guildId={guildId} initialListing={listing} />
    </div>
  );
}
