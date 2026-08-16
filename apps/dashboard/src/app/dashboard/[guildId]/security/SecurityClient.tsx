'use client';

import { useState } from 'react';
import { executeToggleSetting } from '../intelligenceActions';
import { ShieldCheck, ShieldAlert, Cpu, Lock, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SecurityClient({ guildId, initialSettings }: { guildId: string; initialSettings: any }) {
  const router = useRouter();
  const [loadingField, setLoadingField] = useState<string | null>(null);

  const handleToggle = async (field: string, currentValue: boolean) => {
    setLoadingField(field);
    try {
      await executeToggleSetting(guildId, field, !currentValue);
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('UNAUTHORIZED') || msg.includes('Missing session')) {
        alert('Your Discord session has expired. Please log in again.');
        router.push('/login');
      } else {
        alert(`Failed to update setting: ${msg}`);
      }
    } finally {
      setLoadingField(null);
    }
  };

  const securityFeatures = [
    {
      id: 'antiRaidEnabled',
      name: 'Anti-Raid Protection',
      description: 'Automatically detects and mitigates coordinated mass-join attacks.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'antiSpamEnabled',
      name: 'Anti-Spam Filter',
      description: 'Prevents chat flooding, rapid repetitive messages, and link spam.',
      icon: ShieldAlert,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'antiNukeEnabled',
      name: 'Anti-Nuke Systems',
      description: 'Prevents rogue admins from mass-deleting channels and roles.',
      icon: Lock,
      color: 'text-red-400',
      bg: 'bg-red-500/10 border-red-500/20'
    },
    {
      id: 'aiModerationEnabled',
      name: 'AI Moderation',
      description: 'Analyzes message intent using AI to catch subtle toxicity and threats.',
      icon: Cpu,
      color: 'text-[#5865F2]',
      bg: 'bg-[#5865F2]/10 border-[#5865F2]/20'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {securityFeatures.map((feature) => {
        const Icon = feature.icon;
        const isEnabled = initialSettings?.[feature.id] === true;
        
        return (
          <div key={feature.id} className="bg-black/20 border border-white/5 rounded-2xl p-6 backdrop-blur-sm flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl border ${feature.bg}`}>
                <Icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <button 
                onClick={() => handleToggle(feature.id, isEnabled)}
                disabled={loadingField === feature.id}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${isEnabled ? 'bg-emerald-500' : 'bg-neutral-700'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                {loadingField === feature.id && (
                  <Loader2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-black animate-spin" />
                )}
              </button>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
            <p className="text-sm text-neutral-400 mb-6 flex-grow">{feature.description}</p>
            
            <div className="flex items-center gap-2 mt-auto">
              <span className={`w-2 h-2 rounded-full ${isEnabled ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-neutral-600'}`} />
              <span className={`text-xs font-semibold uppercase tracking-wider ${isEnabled ? 'text-emerald-400' : 'text-neutral-500'}`}>
                {isEnabled ? 'Active' : 'Disabled'}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
