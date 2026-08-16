import React from 'react';
import { prisma } from '@niko/db';
import { Server, Users, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ServersPage() {
  const publicGuilds = await prisma.guild.findMany({
    where: {
      settings: {
        publicListing: true
      }
    },
    select: {
      id: true,
      name: true,
      memberCount: true,
      joinedAt: true,
    },
    orderBy: {
      memberCount: 'desc'
    },
    take: 50 // Limit to top 50 for now
  });

  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Public Niko Servers</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Discover communities that are protected by Niko's advanced security.
        </p>
      </div>

      {publicGuilds.length === 0 ? (
        <div className="text-center py-20 glass rounded-3xl border border-white/5">
          <Server className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">No public servers found</h2>
          <p className="text-neutral-400 max-w-md mx-auto">
            Server owners can opt-in to listing their community publicly from the Niko Dashboard.
          </p>
          <Link href="/login" className="inline-block mt-6 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors">
            Go to Dashboard
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicGuilds.map((guild: any) => (
            <div key={guild.id} className="glass p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-blue-500/20 flex items-center justify-center border border-white/10 shrink-0">
                    <span className="text-xl font-bold text-white">{guild.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white truncate max-w-[200px]" title={guild.name}>
                      {guild.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                      <Users className="w-3.5 h-3.5" />
                      {guild.memberCount.toLocaleString()} members
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
                  <ShieldAlert className="w-4 h-4" />
                  Niko Protected
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
