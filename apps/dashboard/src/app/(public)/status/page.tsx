import React from 'react';
import { Activity, Server, Database, Globe } from 'lucide-react';

export default function StatusPage() {
  const services = [
    { name: "Niko Bot", description: "Discord Bot Gateway", status: "Operational", icon: <Server className="w-6 h-6 text-emerald-400" /> },
    { name: "Dashboard", description: "Web Interface & API", status: "Operational", icon: <Globe className="w-6 h-6 text-emerald-400" /> },
    { name: "Discord Integration", description: "OAuth & API Access", status: "Operational", icon: <Activity className="w-6 h-6 text-emerald-400" /> },
    { name: "Database", description: "PostgreSQL & Cache", status: "Operational", icon: <Database className="w-6 h-6 text-emerald-400" /> },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">System Status</h1>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          All Systems Operational
        </div>
        <p className="text-neutral-400 mt-4">
          Current status of Niko services and infrastructure.
        </p>
      </div>

      <div className="space-y-4">
        {services.map((service, idx) => (
          <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{service.name}</h3>
                <p className="text-sm text-neutral-400">{service.description}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 self-start sm:self-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {service.status}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 glass p-8 rounded-3xl border border-white/5 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Past Incidents</h3>
        <p className="text-neutral-400">No incidents reported in the last 90 days.</p>
      </div>
    </div>
  );
}
