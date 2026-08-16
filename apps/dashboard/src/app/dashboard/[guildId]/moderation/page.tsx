import { getSession } from '@/lib/session';
import { prisma } from "@niko/db";
import { redirect } from 'next/navigation';
import { Shield, ShieldAlert, Ban, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default async function ModerationPage({ params }: { params: Promise<{ guildId: string }> }) {
  const { guildId } = await params;
  const session = await getSession();
  
  if (!session) redirect('/login');

  const recentCases = await prisma.moderationCase.findMany({
    where: { guildId },
    orderBy: { createdAt: 'desc' },
    take: 15,
  });

  const getActionIcon = (action?: string) => {
    switch ((action || '').toUpperCase()) {
      case 'BAN': return <Ban className="w-4 h-4 text-red-400" />;
      case 'KICK': return <ShieldAlert className="w-4 h-4 text-orange-400" />;
      case 'TIMEOUT': return <Clock className="w-4 h-4 text-amber-400" />;
      case 'WARN': return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      default: return <Shield className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Moderation Logs</h2>
        <p className="text-neutral-400">View recent moderation actions and warnings taken in this server.</p>
      </div>

      <div className="bg-black/20 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
        {recentCases.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 text-center">
            <Shield className="w-16 h-16 text-neutral-800 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Moderation History</h3>
            <p className="text-neutral-500 max-w-sm">There have been no moderation actions taken in this server yet. Keep it clean!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-neutral-400 text-sm font-medium border-b border-white/5">
                  <th className="p-4 w-32">Case ID</th>
                  <th className="p-4">Action</th>
                  <th className="p-4">Target User</th>
                  <th className="p-4">Moderator</th>
                  <th className="p-4 hidden md:table-cell">Reason</th>
                  <th className="p-4 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentCases.map((c: any) => (
                  <tr key={c.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4">
                      <span className="font-mono text-xs text-neutral-500">#{String(c.id).padStart(6, '0')}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getActionIcon(c.type)}
                        <span className="font-semibold text-white capitalize">{c.type?.toLowerCase()}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-neutral-300 font-medium">{c.targetId}</span>
                    </td>
                    <td className="p-4 text-neutral-400">{c.moderatorId}</td>
                    <td className="p-4 hidden md:table-cell text-neutral-400 text-sm truncate max-w-[200px]">
                      {c.reason || 'No reason provided'}
                    </td>
                    <td className="p-4 text-right text-sm text-neutral-500 whitespace-nowrap">
                      {formatDistanceToNow(c.createdAt, { addSuffix: true })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
