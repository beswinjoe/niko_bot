import { getSession } from '@/lib/session';
import { getDiscordUserGuilds, hasManageGuildPermission, getGuildIconUrl } from '@/lib/discord';
import { prisma } from "@niko/db";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, AlertTriangle, Users, Activity } from 'lucide-react';
import IntelligenceClient from './IntelligenceClient';
import { getHealthAndRecommendations } from './intelligenceActions';



export default async function GuildDashboard({ params }: { params: Promise<{ guildId: string }> }) {
  const { guildId } = await params;
  const session = await getSession();
  const cookieStore = await cookies();
  const discordToken = cookieStore.get('discord_token')?.value;

  if (!session || !discordToken) redirect('/login');

  let guilds;
  try {
    guilds = await getDiscordUserGuilds(discordToken);
  } catch (e) {
    redirect('/login');
  }
  const targetGuild = guilds.find(g => g.id === guildId);

  if (!targetGuild || (!targetGuild.owner && !hasManageGuildPermission(targetGuild.permissions))) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
        <p className="text-neutral-400 mb-8 text-lg">You do not have permission to manage this server.</p>
        <Link href="/dashboard" className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-white rounded-xl font-medium transition-colors">Back to Dashboard</Link>
      </div>
    );
  }

  const dbGuild = await prisma.guild.findUnique({
    where: { id: guildId },
    include: {
      settings: true,
      _count: { select: { cases: true, warnings: true, securityEvents: true } }
    }
  });

  if (!dbGuild) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold mb-4">Niko isn&apos;t installed yet</h1>
        <p className="text-neutral-400 mb-8 text-lg">Please invite the bot to {targetGuild.name} to view the dashboard.</p>
        <div className="flex gap-4 justify-center">
          <a href={`https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=8&scope=bot%20applications.commands&guild_id=${guildId}`} 
             target="_blank" rel="noopener noreferrer" 
             className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-medium transition-colors">
            Add Niko
          </a>
          <Link href="/dashboard" className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-white rounded-xl font-medium transition-colors">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  const iconUrl = getGuildIconUrl(targetGuild.id, targetGuild.icon);
  const healthData = await getHealthAndRecommendations(guildId);

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-6">
          {iconUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={iconUrl} alt={targetGuild.name} className="w-20 h-20 rounded-2xl object-cover shadow-xl border border-white/5" />
          ) : (
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-3xl font-bold text-neutral-400 border border-white/5">
              {targetGuild.name.charAt(0)}
            </div>
          )}
          <div>
            <h1 className="text-3xl font-extrabold text-white mb-2">{targetGuild.name}</h1>
            <p className="text-neutral-400 flex items-center gap-2">
              <ShieldCheck className={`w-5 h-5 ${healthData.score >= 80 ? 'text-emerald-400' : (healthData.score >= 50 ? 'text-amber-400' : 'text-red-400')}`} />
              Security Score: <span className={`font-semibold ${healthData.score >= 80 ? 'text-emerald-400' : (healthData.score >= 50 ? 'text-amber-400' : 'text-red-400')}`}>{healthData.score}/100</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 border-b border-white/5 mb-8 overflow-x-auto pb-px">
        {['Overview', 'Security', 'Moderation', 'Analytics', 'Logs', 'Settings'].map((tab, i) => (
          <Link 
            key={tab} 
            href={tab === 'Settings' ? `/dashboard/${guildId}/settings/permissions` : tab === 'Logs' ? `/dashboard/${guildId}/logs` : `/dashboard/${guildId}`}
            className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${i === 0 ? 'border-accent text-white' : 'border-transparent text-neutral-400 hover:text-white'}`}>
            {tab}
          </Link>
        ))}
      </div>

      <IntelligenceClient 
        guildId={guildId} 
        initialScore={healthData.score} 
        initialRecommendations={healthData.recommendations} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 text-neutral-400">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-semibold">Threat Level</h3>
          </div>
          <div className="text-4xl font-extrabold text-emerald-400 mb-2">LOW</div>
          <p className="text-sm text-neutral-500">Server is currently secure with no active raids.</p>
        </div>
        
        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 text-neutral-400">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-semibold">Recent Incidents</h3>
          </div>
          <div className="text-4xl font-extrabold text-white mb-2">{dbGuild._count.securityEvents}</div>
          <p className="text-sm text-neutral-500">Security events logged in the last 30 days.</p>
        </div>

        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 text-neutral-400">
            <Activity className="w-5 h-5" />
            <h3 className="font-semibold">Active Protections</h3>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
              <span className={`w-2.5 h-2.5 rounded-full ${dbGuild.settings?.antiRaidEnabled ? 'bg-emerald-500' : 'bg-red-500'}`} /> Anti-Raid
            </li>
            <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
              <span className={`w-2.5 h-2.5 rounded-full ${dbGuild.settings?.antiSpamEnabled ? 'bg-emerald-500' : 'bg-red-500'}`} /> Anti-Spam
            </li>
            <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
              <span className={`w-2.5 h-2.5 rounded-full ${dbGuild.settings?.aiModerationEnabled ? 'bg-emerald-500' : 'bg-red-500'}`} /> AI Moderation
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black/20 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
          <Users className="w-6 h-6 text-accent" />
          Moderation Overview
        </h2>
        <div className="flex flex-wrap gap-12">
          <div>
            <div className="text-sm text-neutral-400 mb-2 font-medium">Total Cases</div>
            <div className="text-3xl font-bold text-white">{dbGuild._count.cases}</div>
          </div>
          <div>
            <div className="text-sm text-neutral-400 mb-2 font-medium">Warnings Issued</div>
            <div className="text-3xl font-bold text-white">{dbGuild._count.warnings}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
