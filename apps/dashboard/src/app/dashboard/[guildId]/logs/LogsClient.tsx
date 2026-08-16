'use client';

import { useState, useMemo, useEffect } from 'react';
import { getAvatarUrl } from '@/lib/discord';
import { Search, Filter, Clock, User, Settings2 } from 'lucide-react';

interface AuditUser {
  id: string;
  username: string;
  avatar: string | null;
  globalName: string | null;
}

interface AuditLog {
  id: number;
  guildId: string;
  actorUserId: string;
  action: string;
  targetType: string | null;
  targetId: string | null;
  metadata: Record<string, unknown>;
  createdAt: Date;
  user: AuditUser;
}

export default function LogsClient({ initialLogs }: { initialLogs: Record<string, unknown>[] }) {
  const [logs] = useState<AuditLog[]>(initialLogs.map(l => ({ ...(l as unknown as AuditLog), createdAt: new Date(l.createdAt as string) })));
  
  // Filters
  const [search, setSearch] = useState('');
  const [actionFilter, setActionFilter] = useState('');
  const [userFilter, setUserFilter] = useState('');

  // Extract unique users and actions for dropdowns
  const uniqueUsers = useMemo(() => {
    const map = new Map<string, AuditUser>();
    logs.forEach(l => {
      if (!map.has(l.actorUserId)) map.set(l.actorUserId, l.user);
    });
    return Array.from(map.values());
  }, [logs]);

  const uniqueActions = useMemo(() => {
    return Array.from(new Set(logs.map(l => l.action))).sort();
  }, [logs]);

  const filteredLogs = useMemo(() => {
    return logs.filter(log => {
      // User filter
      if (userFilter && log.actorUserId !== userFilter) return false;
      // Action filter
      if (actionFilter && log.action !== actionFilter) return false;
      // Search filter (searches targetId, metadata stringified, or action)
      if (search) {
        const query = search.toLowerCase();
        const matchesTarget = log.targetId?.toLowerCase().includes(query);
        const matchesAction = log.action.toLowerCase().includes(query);
        const matchesMeta = log.metadata ? JSON.stringify(log.metadata).toLowerCase().includes(query) : false;
        if (!matchesTarget && !matchesAction && !matchesMeta) return false;
      }
      return true;
    });
  }, [logs, search, actionFilter, userFilter]);

  const formatActionName = (action: string) => {
    return action.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // eslint-disable-next-line react-hooks/purity
  const now = Date.now();

  const getRelativeTime = (date: Date) => {
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
    const daysDifference = Math.round((date.getTime() - now) / (1000 * 60 * 60 * 24));
    
    if (Math.abs(daysDifference) > 0) {
      return rtf.format(daysDifference, 'day');
    }
    const hoursDifference = Math.round((date.getTime() - now) / (1000 * 60 * 60));
    if (Math.abs(hoursDifference) > 0) {
      return rtf.format(hoursDifference, 'hour');
    }
    const minutesDifference = Math.round((date.getTime() - now) / (1000 * 60));
    return rtf.format(minutesDifference, 'minute');
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
          <input 
            type="text" 
            placeholder="Search targets or metadata..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-black border border-neutral-800 rounded-xl pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-accent outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-neutral-500" />
          <select 
            value={actionFilter}
            onChange={e => setActionFilter(e.target.value)}
            className="bg-black border border-neutral-800 rounded-xl px-4 py-2 text-white focus:ring-2 focus:ring-accent outline-none"
          >
            <option value="">All Actions</option>
            {uniqueActions.map(a => (
              <option key={a} value={a}>{formatActionName(a)}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-neutral-500" />
          <select 
            value={userFilter}
            onChange={e => setUserFilter(e.target.value)}
            className="bg-black border border-neutral-800 rounded-xl px-4 py-2 text-white focus:ring-2 focus:ring-accent outline-none"
          >
            <option value="">All Users</option>
            {uniqueUsers.map(u => (
              <option key={u.id} value={u.id}>{u.globalName || u.username}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Log Feed */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
        {filteredLogs.length === 0 ? (
          <div className="p-12 text-center text-neutral-500 flex flex-col items-center">
            <Settings2 className="w-12 h-12 mb-4 opacity-50" />
            <p className="text-lg font-medium">No audit logs found</p>
            <p className="text-sm">Try adjusting your filters to see more results.</p>
          </div>
        ) : (
          <div className="divide-y divide-neutral-800">
            {filteredLogs.map(log => {
              const avatar = getAvatarUrl(log.user.id, log.user.avatar);
              
              return (
                <div key={log.id} className="p-5 hover:bg-neutral-800/50 transition-colors flex gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={avatar} alt={log.user.username} className="w-10 h-10 rounded-full bg-black border border-white/10 shrink-0" />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <div className="flex items-center gap-2 truncate">
                        <span className="font-bold text-white truncate">{log.user.globalName || log.user.username}</span>
                        <span className="text-neutral-500 text-sm">({log.user.id})</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-neutral-500 text-sm shrink-0">
                        <Clock className="w-4 h-4" />
                        <span title={log.createdAt.toLocaleString()}>{getRelativeTime(log.createdAt)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                        {formatActionName(log.action)}
                      </span>
                      {log.targetType && (
                        <span className="text-sm text-neutral-400">
                          on <span className="font-medium text-neutral-300">{log.targetType}</span> 
                          {log.targetId && ` (${log.targetId})`}
                        </span>
                      )}
                    </div>

                    {log.metadata && (
                      <div className="bg-black/40 rounded-lg p-3 border border-white/5 mt-2">
                        <pre className="text-xs text-neutral-300 font-mono whitespace-pre-wrap break-all">
                          {JSON.stringify(log.metadata, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
