import { getSession } from '@/lib/session';
import { prisma } from "@niko/db";
import { redirect } from 'next/navigation';
import { ShieldCheck, ShieldAlert, Cpu, Lock, BellRing } from 'lucide-react';
import SecurityClient from './SecurityClient';

export default async function SecurityPage({ params }: { params: Promise<{ guildId: string }> }) {
  const { guildId } = await params;
  const session = await getSession();
  
  if (!session) redirect('/login');

  const dbGuild = await prisma.guild.findUnique({
    where: { id: guildId },
    include: {
      settings: true,
    }
  });

  if (!dbGuild) redirect('/dashboard');
  
  const settings = dbGuild.settings;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Security Settings</h2>
        <p className="text-neutral-400">Configure automated protections and threat mitigations for your server.</p>
      </div>

      <SecurityClient guildId={guildId} initialSettings={settings} />

      <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 flex gap-4 items-start">
        <ShieldAlert className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-bold text-amber-500 mb-2">Emergency Lockdown Mode</h3>
          <p className="text-sm text-amber-500/80 mb-4 max-w-2xl">
            If your server is actively being raided, you can enable Lockdown Mode. This will temporarily strip all members of send messages and connect permissions, and require verification to regain access.
          </p>
          <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-colors text-sm opacity-50 cursor-not-allowed">
            Initiate Lockdown (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}
