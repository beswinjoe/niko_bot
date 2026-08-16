"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';

const commands = [
  { category: 'Moderation', name: 'warn', syntax: '@user [reason]', description: 'Warn a user.', reqPerm: 'Moderate Members' },
  { category: 'Moderation', name: 'mute', syntax: '@user [duration] [reason]', description: 'Timeout a user.', reqPerm: 'Moderate Members' },
  { category: 'Moderation', name: 'kick', syntax: '@user [reason]', description: 'Kick a user.', reqPerm: 'Kick Members' },
  { category: 'Moderation', name: 'ban', syntax: '@user [duration] [reason]', description: 'Ban a user.', reqPerm: 'Ban Members' },
  { category: 'Moderation', name: 'unban', syntax: 'userid [reason]', description: 'Unban a user.', reqPerm: 'Ban Members' },
  { category: 'Moderation', name: 'purge', syntax: '[amount]', description: 'Delete messages.', reqPerm: 'Manage Messages' },
  { category: 'Moderation', name: 'history', syntax: '@user', description: 'View moderation history.', reqPerm: 'Moderate Members' },
  
  { category: 'Security', name: 'lockdown', syntax: '[duration]', description: 'Lock the current channel.', reqPerm: 'Manage Channels' },
  
  { category: 'Server', name: 'serverinfo', syntax: '', description: 'View server information.', reqPerm: 'None' },
  { category: 'Server', name: 'userinfo', syntax: '[@user]', description: 'View user information.', reqPerm: 'None' },
  { category: 'Server', name: 'ping', syntax: '', description: 'Check bot latency.', reqPerm: 'None' },
  { category: 'Server', name: 'avatar', syntax: '[@user]', description: 'Get a user\'s avatar.', reqPerm: 'None' },

  { category: 'Rules', name: 'rules', syntax: '', description: 'View the server rules.', reqPerm: 'None' },
  { category: 'Rules', name: 'addrule', syntax: '[content]', description: 'Add a new rule.', reqPerm: 'Manage Guild' },
  { category: 'Rules', name: 'deleterule', syntax: '[rule_number]', description: 'Delete a rule.', reqPerm: 'Manage Guild' },
  
  { category: 'AFK', name: 'afk', syntax: '[reason]', description: 'Set your AFK status.', reqPerm: 'None' },
  
  { category: 'Permissions', name: 'permit', syntax: '@role [command]', description: 'Grant role access to a command.', reqPerm: 'Administrator' },
  { category: 'Permissions', name: 'unpermit', syntax: '@role [command]', description: 'Revoke role access.', reqPerm: 'Administrator' },
  { category: 'Permissions', name: 'perms', syntax: '', description: 'View command permissions.', reqPerm: 'Administrator' },
  
  { category: 'Intelligence', name: 'health', syntax: '', description: 'View server health and recommendations.', reqPerm: 'Manage Guild' },
  
  { category: 'Configuration', name: 'prefix', syntax: '[new_prefix]', description: 'Change the bot prefix.', reqPerm: 'Manage Guild' },
  { category: 'Configuration', name: 'muterole', syntax: '[@role]', description: 'Set the mute role.', reqPerm: 'Manage Guild' },
  { category: 'Configuration', name: 'setup', syntax: '', description: 'Initialize server configuration.', reqPerm: 'Manage Guild' }
];

const categories = ['All', ...Array.from(new Set(commands.map(c => c.category)))];

export default function CommandsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCommands = commands.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                          c.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Commands List</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-4">
          Explore all the features Niko has to offer.
        </p>
        <p className="text-sm text-neutral-500">
          Note: Examples use the default `!` prefix, but this can be customized per server.
        </p>
      </div>

      <div className="mb-10 flex flex-col items-center gap-6">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          <input 
            type="text" 
            placeholder="Search commands..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-neutral-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === category 
                  ? 'bg-white text-black' 
                  : 'glass text-neutral-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredCommands.length === 0 ? (
          <div className="text-center text-neutral-500 py-12 glass rounded-2xl border border-white/5">
            No commands found matching your criteria.
          </div>
        ) : (
          filteredCommands.map((cmd, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent font-mono">!{cmd.name} {cmd.syntax}</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 text-xs font-semibold uppercase tracking-wider">
                    {cmd.category}
                  </span>
                </div>
                <p className="text-neutral-400">{cmd.description}</p>
              </div>
              <div className="md:text-right">
                <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1">Required Permission</div>
                <div className="text-sm text-neutral-300">{cmd.reqPerm}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
