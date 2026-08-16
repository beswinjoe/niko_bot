import { Metadata } from 'next';
import { prisma } from '@niko/db';
import { notFound } from 'next/navigation';
import { Users, Globe, Hash, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ guildId: string }> }): Promise<Metadata> {
  const { guildId } = await params;
  const listing = await prisma.serverListing.findUnique({
    where: { guildId },
    include: { guild: true }
  });

  if (!listing) {
    return {
      title: 'Server Not Found | Niko',
    };
  }

  return {
    title: `${listing.guild.name} | Niko Servers`,
    description: listing.description || `Join ${listing.guild.name} on Discord.`,
  };
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ServerListingPage({ params }: { params: Promise<{ guildId: string }> }) {
  const { guildId } = await params;
  const listing = await prisma.serverListing.findUnique({
    where: { guildId: guildId },
    include: { guild: true }
  });

  if (!listing || !listing.isPublic) {
    notFound();
  }

  // Increment views
  await prisma.serverListing.update({
    where: { guildId },
    data: { views: { increment: 1 } }
  }).catch(() => {});

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
        <div className="h-32 md:h-48 bg-gradient-to-r from-primary/20 to-primary/5 w-full relative"></div>
        
        <div className="px-6 md:px-10 pb-10 relative">
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16 md:-mt-20 mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-background p-2 shrink-0 shadow-lg">
              <div className="w-full h-full rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
                {listing.iconUrl ? (
                  <img src={listing.iconUrl} alt={listing.guild.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl font-bold">{listing.guild.name.charAt(0)}</span>
                )}
              </div>
            </div>
            
            <div className="flex-1 pb-2">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{listing.guild.name}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md font-medium">
                  <Users className="w-4 h-4" />
                  {listing.guild.memberCount.toLocaleString()} Members
                </span>
                {listing.category && (
                  <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded-md font-medium">
                    {listing.category}
                  </span>
                )}
                {listing.language && (
                  <span className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md font-medium uppercase">
                    <Globe className="w-4 h-4" />
                    {listing.language}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex shrink-0 pb-2">
              {listing.inviteUrl ? (
                <Button size="lg" className="w-full md:w-auto font-bold" asChild>
                  <a href={listing.inviteUrl} target="_blank" rel="noopener noreferrer">
                    Join Server <ArrowUpRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              ) : (
                <Button size="lg" disabled variant="secondary" className="w-full md:w-auto">
                  Invites Disabled
                </Button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
                  About this Server
                </h2>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {listing.description ? (
                    <p className="whitespace-pre-wrap text-muted-foreground text-base leading-relaxed">
                      {listing.description}
                    </p>
                  ) : (
                    <p className="text-muted-foreground italic">No description provided.</p>
                  )}
                </div>
              </section>

              {listing.tags.length > 0 && (
                <section>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Hash className="w-4 h-4" /> Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag: any) => (
                      <span key={tag} className="bg-secondary px-3 py-1.5 rounded-md text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border bg-secondary/20 p-5">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Powered by Niko
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This server uses Niko for security, moderation, and community management.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/">Add Niko to Your Server</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
