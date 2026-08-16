import React from 'react';
import { Shield, Zap, Activity, Users, FileText, BarChart3, Settings } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      title: "MODERATION",
      icon: <Shield className="w-8 h-8 text-accent" />,
      items: ["Warn", "Mute", "Kick", "Ban", "Unban", "Purge", "Moderation history", "Temporary punishments", "Moderation DMs"]
    },
    {
      title: "SECURITY",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      items: ["Anti-Raid", "Anti-Spam", "Anti-Nuke", "Verification", "Lockdown", "Security incidents", "Security recommendations"]
    },
    {
      title: "SERVER MANAGEMENT",
      icon: <Settings className="w-8 h-8 text-emerald-500" />,
      items: ["Custom prefix", "Custom role permissions", "Mute role", "Rules", "Logging", "Configuration"]
    },
    {
      title: "INTELLIGENCE",
      icon: <Activity className="w-8 h-8 text-purple-500" />,
      items: ["Server Health Score", "Recommendations", "Security analysis", "Moderation analysis", "One-click fixes"]
    },
    {
      title: "AFK",
      icon: <Users className="w-8 h-8 text-orange-500" />,
      items: ["AFK status", "AFK duration", "Mention detection", "Automatic return detection"]
    },
    {
      title: "ANALYTICS",
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      items: ["Moderation statistics", "Security incidents", "Member activity", "Server health", "Configuration history"]
    },
    {
      title: "DASHBOARD",
      icon: <FileText className="w-8 h-8 text-pink-500" />,
      items: ["Manage everything from Niko.com."]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Powerful Features</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Everything you need to manage, moderate, and protect your Discord server, all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="mb-6">{feature.icon}</div>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h2>
            <ul className="space-y-3">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-center text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
