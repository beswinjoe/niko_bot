import React from 'react';
import { BookOpen, Shield, Code, Server, Zap } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      icon: <BookOpen className="w-6 h-6 text-accent" />,
      content: "Learn how to add Niko to your Discord server and configure the initial settings.",
      link: "#getting-started"
    },
    {
      title: "Moderation",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      content: "Understand how Niko's moderation system works, including bans, kicks, and timeouts.",
      link: "#moderation"
    },
    {
      title: "Security & Anti-Raid",
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
      content: "Configure Anti-Nuke, Anti-Spam, and automatic verification systems to protect your server.",
      link: "#security"
    },
    {
      title: "Dashboard & Config",
      icon: <Server className="w-6 h-6 text-purple-500" />,
      content: "Manage roles, permissions, and audit logs directly from the Niko web dashboard.",
      link: "#dashboard"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Documentation</h1>
        <p className="text-xl text-neutral-400">
          Everything you need to know about setting up and using Niko.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {sections.map((section, idx) => (
          <a key={idx} href={section.link} className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                {section.icon}
              </div>
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
            </div>
            <p className="text-neutral-400 leading-relaxed">{section.content}</p>
          </a>
        ))}
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <h2 id="getting-started" className="text-3xl font-bold text-white mt-12 mb-6 border-b border-white/10 pb-4">Getting Started</h2>
        <p className="text-neutral-300">
          Adding Niko to your server is straightforward. Simply click the "Add Niko to Discord" button, authorize the bot for your server, and you're ready to go.
        </p>
        
        <div className="my-8 p-6 glass rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 mt-0">Ready to begin?</h3>
            <p className="text-neutral-400 m-0">Install Niko and open your dashboard to get started.</p>
          </div>
          <Link href="/login" className="px-6 py-3 rounded-xl bg-white text-black font-bold whitespace-nowrap hover:bg-neutral-200 transition-colors">
            Open Dashboard
          </Link>
        </div>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Initial Setup</h3>
        <ul className="text-neutral-300 space-y-2 list-disc pl-6">
          <li>Run the <code>!setup</code> command or configure via the Dashboard.</li>
          <li>Set up your <strong>Mute Role</strong> and ensure Niko's role is positioned highest in the hierarchy.</li>
          <li>Configure log channels for Moderation and Security.</li>
        </ul>

        <h2 id="moderation" className="text-3xl font-bold text-white mt-16 mb-6 border-b border-white/10 pb-4">Moderation</h2>
        <p className="text-neutral-300">
          Niko offers standard moderation commands like warn, mute, kick, and ban. All moderation actions are logged in the dashboard and tied to the target user's moderation history.
        </p>
        <p className="text-neutral-300 mt-4">
          By default, AI Moderation is enabled. This will automatically flag and delete extremely toxic or harmful messages. You can disable this or change the threshold in the Dashboard under Security.
        </p>
      </div>
    </div>
  );
}
