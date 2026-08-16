'use client';

import { useState } from 'react';
import { Recommendation, executeToggleSetting, executeCreateMuteRole, executeCreateLogChannel } from './intelligenceActions';
import { ShieldAlert, Zap, Loader2, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function IntelligenceClient({
  guildId,
  initialScore,
  initialRecommendations
}: {
  guildId: string;
  initialScore: number;
  initialRecommendations: Recommendation[];
}) {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [showConfirmId, setShowConfirmId] = useState<string | null>(null);
  
  const handleFix = async (rec: Recommendation) => {
    if (rec.requiresConfirmation && showConfirmId !== rec.id) {
      setShowConfirmId(rec.id);
      return;
    }

    setLoadingId(rec.id);
    
    try {
      if (rec.action.type === 'TOGGLE_SETTING') {
        await executeToggleSetting(guildId, rec.action.field, rec.action.value);
      } else if (rec.action.type === 'CREATE_MUTE_ROLE') {
        await executeCreateMuteRole(guildId);
      } else if (rec.action.type === 'CREATE_LOG_CHANNEL') {
        await executeCreateLogChannel(guildId);
      }
      
      // Reset state and refresh
      setShowConfirmId(null);
      router.refresh();
    } catch (err: unknown) {
      alert(`Fix failed: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="bg-black/20 border border-white/5 rounded-2xl p-8 backdrop-blur-sm mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Zap className="w-6 h-6 text-[#5865F2]" />
          Niko Intelligence Recommendations
        </h2>
        <div className={`px-4 py-2 rounded-lg font-bold text-lg border ${initialScore >= 80 ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : (initialScore >= 50 ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20')}`}>
          Health Score: {initialScore}/100
        </div>
      </div>

      {initialRecommendations.length === 0 ? (
        <div className="p-8 text-center border border-white/5 rounded-xl bg-emerald-500/5">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">All Clear!</h3>
          <p className="text-neutral-400">Your server is highly secure and fully optimized.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {initialRecommendations.map(rec => (
            <div key={rec.id} className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-white text-lg">{rec.title}</h3>
                  {rec.impact === 'high' && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-red-500/10 text-red-400 rounded">High Impact</span>
                  )}
                  {rec.impact === 'medium' && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-amber-500/10 text-amber-400 rounded">Medium Impact</span>
                  )}
                </div>
                <p className="text-sm text-neutral-400">{rec.description}</p>
              </div>

              <div className="w-full sm:w-auto mt-2 sm:mt-0 flex shrink-0">
                {rec.action.type !== 'TOGGLE_SETTING' || rec.action.field !== '_none' ? (
                  showConfirmId === rec.id ? (
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button 
                        onClick={() => handleFix(rec)}
                        disabled={loadingId === rec.id}
                        className="flex-1 sm:flex-none px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        {loadingId === rec.id ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Confirm Fix'}
                      </button>
                      <button 
                        onClick={() => setShowConfirmId(null)}
                        disabled={loadingId === rec.id}
                        className="flex-1 sm:flex-none px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleFix(rec)}
                      disabled={loadingId === rec.id}
                      className="w-full sm:w-auto px-6 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {loadingId === rec.id ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Fix Issue'}
                    </button>
                  )
                ) : (
                  <div className="px-4 py-2 bg-neutral-800 text-neutral-400 text-sm font-medium rounded-lg flex items-center gap-2 border border-neutral-700">
                    <ShieldAlert className="w-4 h-4" />
                    Manual Review Required
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
