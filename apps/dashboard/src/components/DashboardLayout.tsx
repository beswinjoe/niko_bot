"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';

export default function DashboardLayout({
  guildId,
  guildName,
  guildIconUrl,
  healthScore,
  children
}: {
  guildId: string;
  guildName: string;
  guildIconUrl: string | null;
  healthScore: number;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabs = [
    { name: 'Overview', href: `/dashboard/${guildId}` },
    { name: 'Security', href: `/dashboard/${guildId}/security` },
    { name: 'Moderation', href: `/dashboard/${guildId}/moderation` },
    { name: 'Analytics', href: `/dashboard/${guildId}/analytics` },
    { name: 'Logs', href: `/dashboard/${guildId}/logs` },
    { name: 'Settings', href: `/dashboard/${guildId}/settings/permissions` }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-6">
          {guildIconUrl ? (
            <img src={guildIconUrl} alt={guildName} className="w-20 h-20 rounded-2xl object-cover shadow-xl border border-white/5" />
          ) : (
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-3xl font-bold text-neutral-400 border border-white/5">
              {guildName.charAt(0)}
            </div>
          )}
          <div>
            <h1 className="text-3xl font-extrabold text-white mb-2">{guildName}</h1>
            <p className="text-neutral-400 flex items-center gap-2">
              <ShieldCheck className={`w-5 h-5 ${healthScore >= 80 ? 'text-emerald-400' : (healthScore >= 50 ? 'text-amber-400' : 'text-red-400')}`} />
              Security Score: <span className={`font-semibold ${healthScore >= 80 ? 'text-emerald-400' : (healthScore >= 50 ? 'text-amber-400' : 'text-red-400')}`}>{healthScore}/100</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 border-b border-white/5 mb-8 overflow-x-auto pb-px">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href || (tab.name === 'Settings' && pathname.includes('/settings'));
          return (
            <Link 
              key={tab.name} 
              href={tab.href}
              className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${isActive ? 'border-accent text-white' : 'border-transparent text-neutral-400 hover:text-white'}`}>
              {tab.name}
            </Link>
          );
        })}
      </div>

      {children}
    </div>
  );
}
