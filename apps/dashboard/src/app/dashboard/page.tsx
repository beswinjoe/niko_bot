import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { getDiscordUserGuilds, hasManageGuildPermission, getGuildIconUrl } from '@/lib/discord';
import { prisma } from "@niko/db";
import { cookies } from 'next/headers';
import Link from 'next/link';



export default async function DashboardPage() {
  const cookieStore = await cookies();
  const discordToken = cookieStore.get('discord_token')?.value;

  if (!discordToken) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h1 className="text-3xl font-bold mb-4">Session Expired</h1>
        <p className="text-neutral-400 mb-8">Please log in again to sync your servers.</p>
        <Link href="/login" className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors">Login Again</Link>
      </div>
    );
  }

  let allGuilds = [];
  try {
    allGuilds = await getDiscordUserGuilds(discordToken);
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'UNAUTHORIZED') {
      redirect('/login');
    }
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p className="text-neutral-400">Could not fetch your Discord servers. Please try again later.</p>
      </div>
    );
  }

  const managedGuilds = allGuilds.filter(g => g.owner || hasManageGuildPermission(g.permissions));
  const guildIds = managedGuilds.map(g => g.id);

  const dbGuilds = await prisma.guild.findMany({
    where: { id: { in: guildIds } },
    select: { id: true, memberCount: true }
  });
  
  const installedGuildIds = new Set(dbGuilds.map((g: any) => g.id));
  const addBotUrl = `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=277025508352&scope=bot%20applications.commands`;
  
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-extrabold mb-2 text-white">Select a Server</h1>
          <p className="text-neutral-400">Manage Niko settings for your servers</p>
        </div>
        <a href={addBotUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-lg hover:-translate-y-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add Niko to Server
        </a>
      </div>

      {managedGuilds.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-16 bg-black/20 border border-white/5 rounded-3xl text-center">
          <div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center mb-6 border border-white/10">
            <svg className="w-10 h-10 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">No Servers Found</h2>
          <p className="text-neutral-400 mb-8 max-w-md">You don&apos;t have any servers that you manage. Add Niko to a new server to get started.</p>
          <a href={addBotUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-xl font-bold transition-all hover:scale-105">
            + Add Niko to Server
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {managedGuilds.map((guild) => {
            const isInstalled = installedGuildIds.has(guild.id);
            const iconUrl = getGuildIconUrl(guild.id, guild.icon);
            const guildSpecificUrl = `${addBotUrl}&guild_id=${guild.id}`;
            
            return (
              <div key={guild.id} className="bg-black/20 border border-white/5 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  {iconUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={iconUrl} alt={guild.name} className="w-14 h-14 rounded-xl object-cover border border-white/5" />
                  ) : (
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-xl font-bold text-neutral-400 border border-white/5">
                      {guild.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-lg text-white line-clamp-1">{guild.name}</h3>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <span className={`w-2 h-2 rounded-full ${isInstalled ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-transparent border border-neutral-600'}`} />
                      <span className={isInstalled ? 'text-emerald-400 font-medium' : 'text-neutral-500'}>
                        {isInstalled ? 'Niko Online' : 'Niko Offline'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 flex gap-3">
                  {isInstalled ? (
                    <Link href={`/dashboard/${guild.id}`} className="flex-1 bg-white hover:bg-neutral-200 text-black text-center py-2.5 rounded-xl font-medium transition-colors">
                      Open Dashboard
                    </Link>
                  ) : (
                    <a href={guildSpecificUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white border border-white/5 text-center py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      Add Niko
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
