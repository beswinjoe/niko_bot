import { Metadata } from 'next';
import { prisma, ServerListing } from '@niko/db';
import Link from 'next/link';
import { Search, Users, Globe, ExternalLink, Server } from 'lucide-react';

import SortSelect from '@/components/SortSelect';

export const metadata: Metadata = {
  title: 'Niko Servers — Discover Discord Communities',
  description: 'Explore communities powered by Niko and find your next Discord community.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ServersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; page?: string; sort?: string }>
}) {
  const params = await searchParams;
  const query = params.q || '';
  const category = params.category || '';
  const page = parseInt(params.page || '1');
  const sort = params.sort || 'recommended';
  const perPage = 21;

  const where = {
    isPublic: true,
    ...(query ? {
      OR: [
        { guild: { name: { contains: query, mode: 'insensitive' as const } } },
        { description: { contains: query, mode: 'insensitive' as const } },
        { tags: { hasSome: [query] } }
      ]
    } : {}),
    ...(category ? { category } : {})
  };

  let orderBy: any = { views: 'desc' };
  switch (sort) {
    case 'members':
      orderBy = { guild: { memberCount: 'desc' } };
      break;
    case 'recent':
      orderBy = { guild: { joinedAt: 'desc' } };
      break;
    case 'updated':
      orderBy = { guild: { updatedAt: 'desc' } };
      break;
    case 'name':
      orderBy = { guild: { name: 'asc' } };
      break;
    default:
      orderBy = { views: 'desc' };
  }

  let total = 0;
  let listings: any[] = [];
  
  try {
    const [dbTotal, dbListings] = await Promise.all([
      prisma.serverListing.count({ where }),
      prisma.serverListing.findMany({
        where,
        include: { guild: true },
        orderBy,
        skip: (page - 1) * perPage,
        take: perPage,
      })
    ]);
    total = dbTotal;
    listings = dbListings;
  } catch (error) {
    console.error("[Servers] Failed to load listings", error);
    // Continue rendering with empty listings so the user sees the page instead of a 500 error,
    // or we could throw to let Next.js Error boundary handle it, but we MUST log it first.
    throw error; 
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl relative z-10">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold bg-card/50 backdrop-blur-sm text-muted-foreground shadow-sm">
            Niko. Discord Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Discover Niko Servers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore communities powered by Niko and find your next Discord community.
          </p>

          {/* Search Bar & Sort Controls */}
          <div className="w-full max-w-3xl mt-8 flex flex-col md:flex-row gap-4">
            <form className="relative flex-1 group" action="/servers">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <input 
                name="q" 
                defaultValue={query}
                placeholder="Search servers..." 
                className="w-full h-14 bg-card/60 backdrop-blur-md border-2 border-border rounded-xl pl-12 pr-4 text-base focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
              />
              {category && <input type="hidden" name="category" value={category} />}
              {sort && <input type="hidden" name="sort" value={sort} />}
            </form>
            
            <form action="/servers" className="shrink-0 flex items-center">
              {query && <input type="hidden" name="q" value={query} />}
              {category && <input type="hidden" name="category" value={category} />}
              <SortSelect defaultValue={sort} />
            </form>
          </div>
        </div>

        {/* Categories (Optional Row if user wants to filter easily) */}
        {category && (
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium">
              Filtered by Category: {category}
              <Link href={`/servers${query ? `?q=${query}` : ''}`} className="ml-3 hover:text-foreground">
                &times; Clear
              </Link>
            </div>
          </div>
        )}

        {/* Server Grid */}
        {listings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 px-4 text-center border-2 border-dashed border-border/50 rounded-3xl bg-card/30 backdrop-blur-sm">
            <Server className="w-16 h-16 text-muted-foreground/50 mb-6" />
            <h3 className="text-2xl font-bold mb-2">No Niko servers listed yet.</h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Be one of the first communities to appear here and grow your server with Niko.
            </p>
            <Link 
              href="/dashboard"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Add Niko to Your Server
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {listings.map((listing: ServerListing & { guild: any }) => (
              <div 
                key={listing.guildId} 
                className="group relative flex flex-col mt-8 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                {/* Overlapping Icon */}
                <div className="absolute -top-10 left-6">
                  <Link href={`/servers/${listing.guildId}`} className="block w-20 h-20 rounded-full border-4 border-background bg-secondary flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
                    {listing.iconUrl ? (
                      <img src={listing.iconUrl} alt={listing.guild.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-3xl font-bold text-foreground/50">{listing.guild.name.charAt(0)}</span>
                    )}
                  </Link>
                </div>

                <div className="pt-14 px-6 pb-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3 gap-4">
                    <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                      <Link href={`/servers/${listing.guildId}`} className="before:absolute before:inset-0 z-10">
                        {listing.guild.name}
                      </Link>
                    </h3>
                    {listing.inviteUrl && (
                      <a 
                        href={listing.inviteUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 relative z-20 inline-flex items-center justify-center h-8 px-4 text-xs font-semibold rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Join
                      </a>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/80 border border-border/50 text-xs font-medium text-muted-foreground">
                      <Users className="w-3.5 h-3.5" />
                      {listing.guild.memberCount.toLocaleString()} members
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-grow">
                    {listing.description || 'A great community powered by Niko.'}
                  </p>

                  <div className="pt-4 mt-auto border-t border-border/50 flex flex-wrap items-center gap-2">
                    {listing.category && (
                      <span className="inline-flex items-center rounded-md px-2 py-1 text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary">
                        {listing.category}
                      </span>
                    )}
                    {listing.tags.slice(0, 2).map((tag: string) => (
                      <span key={tag} className="inline-flex items-center rounded-md px-2 py-1 text-xs bg-secondary text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Pagination */}
        {total > perPage && (
          <div className="flex justify-center items-center mt-16 gap-4">
            <Link 
              href={`/servers?page=${page - 1}${category ? `&category=${category}` : ''}${query ? `&q=${query}` : ''}${sort ? `&sort=${sort}` : ''}`}
              className={`inline-flex h-10 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:bg-secondary ${page === 1 ? 'pointer-events-none opacity-50' : ''}`}
            >
              Previous
            </Link>
            <span className="text-sm text-muted-foreground font-medium">
              Page {page} of {Math.ceil(total / perPage)}
            </span>
            <Link 
              href={`/servers?page=${page + 1}${category ? `&category=${category}` : ''}${query ? `&q=${query}` : ''}${sort ? `&sort=${sort}` : ''}`}
              className={`inline-flex h-10 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:bg-secondary ${page * perPage >= total ? 'pointer-events-none opacity-50' : ''}`}
            >
              Next
            </Link>
          </div>
        )}
        
      </div>
    </div>
  );
}
