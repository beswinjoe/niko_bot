import { getSession } from '@/lib/session';
import { prisma } from "@niko/db";
import { redirect } from 'next/navigation';
import { BarChart3, Users, Activity, AlertTriangle } from 'lucide-react';

export default async function AnalyticsPage({ params }: { params: Promise<{ guildId: string }> }) {
  const { guildId } = await params;
  const session = await getSession();
  
  if (!session) redirect('/login');

  const dbGuild = await prisma.guild.findUnique({
    where: { id: guildId },
    include: {
      _count: {
        select: {
          cases: true,
          securityEvents: true,
          warnings: true
        }
      }
    }
  });

  if (!dbGuild) redirect('/dashboard');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Server Analytics</h2>
        <p className="text-neutral-400">Activity and security overview for your server.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 text-neutral-400">
            <Users className="w-5 h-5" />
            <h3 className="font-semibold">Total Members</h3>
          </div>
          <div className="text-4xl font-extrabold text-white mb-2">{dbGuild.memberCount.toLocaleString()}</div>
          <div className="text-sm text-emerald-400 font-medium">+0% this week</div>
        </div>
        
        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 text-neutral-400">
            <BarChart3 className="w-5 h-5" />
            <h3 className="font-semibold">Total Cases</h3>
          </div>
          <div className="text-4xl font-extrabold text-white mb-2">{dbGuild._count.cases}</div>
          <div className="text-sm text-neutral-500">Lifetime moderation actions</div>
        </div>

        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 text-neutral-400">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-semibold">Active Warnings</h3>
          </div>
          <div className="text-4xl font-extrabold text-amber-400 mb-2">{dbGuild._count.warnings}</div>
          <div className="text-sm text-neutral-500">Currently active warnings</div>
        </div>

        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 text-neutral-400">
            <Activity className="w-5 h-5" />
            <h3 className="font-semibold">Security Events</h3>
          </div>
          <div className="text-4xl font-extrabold text-red-400 mb-2">{dbGuild._count.securityEvents}</div>
          <div className="text-sm text-neutral-500">Threats mitigated</div>
        </div>
      </div>

      <div className="bg-black/20 border border-white/5 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center justify-center min-h-[300px]">
        <BarChart3 className="w-16 h-16 text-neutral-700 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Detailed Charts Coming Soon</h3>
        <p className="text-neutral-400 max-w-md text-center">
          We are currently gathering enough data points to generate meaningful visual charts for your server&apos;s activity over time.
        </p>
      </div>
    </div>
  );
}
