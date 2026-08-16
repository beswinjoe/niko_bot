import React from 'react';
import type { Metadata } from 'next';
import PublicNavbar from '@/components/PublicNavbar';

export const metadata: Metadata = {
  title: 'Niko | Advanced Discord Security & Moderation',
  description: 'Smarter moderation. Better server security. Protect your community with enterprise-grade threat detection and AI-powered content moderation.',
  openGraph: {
    title: 'Niko | Advanced Discord Security & Moderation',
    description: 'Smarter moderation. Better server security. Protect your community with enterprise-grade threat detection and AI-powered content moderation.',
    images: [{ url: '/logo.png', width: 256, height: 256 }],
  },
  twitter: {
    card: 'summary',
    title: 'Niko | Advanced Discord Security & Moderation',
    description: 'Protect your community with enterprise-grade threat detection and AI-powered content moderation.',
    images: ['/logo.png'],
  }
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute w-[800px] h-[800px] rounded-full blur-[120px] bg-accent/10 -top-[20%] -left-[10%] animate-[pulse_10s_ease-in-out_infinite] -z-10" />
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] bg-blue-500/10 top-[40%] -right-[10%] animate-[pulse_12s_ease-in-out_infinite_reverse] -z-10" />

      <PublicNavbar />
      
      <main className="pt-32 pb-20 px-6 min-h-[calc(100vh-100px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-neutral-500 text-sm">
          <div>&copy; {new Date().getFullYear()} Niko Security. All rights reserved.</div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support Server</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
