"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Commands', href: '/commands' },
    { name: 'Servers', href: '/servers' },
    { name: 'Promote Server', href: '/promote' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Status', href: '/status' },
    { name: 'Support', href: '/support' },
  ];

  const addBotUrl = `https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || '123'}&permissions=277025508352&scope=bot%20applications.commands`;

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Niko Logo" className="w-10 h-10 object-contain rounded-full shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
            <span className="text-xl font-extrabold bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">Niko</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-white bg-white/10' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-xl border border-white/10 transition-colors">
            Dashboard
          </Link>
          <a href={addBotUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-black bg-white hover:bg-neutral-200 px-5 py-2.5 rounded-xl transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)]">
            Add Niko to Discord
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 text-neutral-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass border-b border-white/5 p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl transition-colors ${pathname === link.href ? 'text-white bg-white/10' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <Link 
            href="/login" 
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-center rounded-xl font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            Dashboard
          </Link>
          <a 
            href={addBotUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-center rounded-xl font-semibold text-black bg-white hover:bg-neutral-200 transition-colors"
          >
            Add Niko to Discord
          </a>
        </div>
      )}
    </header>
  );
}
