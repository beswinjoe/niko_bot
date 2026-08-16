import type { Metadata } from 'next';
import './globals.css';

import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.DISCORD_REDIRECT_URI?.replace('/api/auth/discord/callback', '') || 'http://localhost:3000'),
  title: 'Niko | Advanced Discord Security & Moderation',
  description: 'Manage your server security, AI moderation, and automate your Discord community with Niko.',
  openGraph: {
    title: 'Niko | Advanced Discord Security & Moderation',
    description: 'Manage your server security, AI moderation, and automate your Discord community with Niko.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niko | Advanced Discord Security & Moderation',
    description: 'Manage your server security, AI moderation, and automate your Discord community with Niko.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
