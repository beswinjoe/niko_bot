import type { Metadata } from 'next';
import './globals.css';

import React from 'react';

export const metadata: Metadata = {
  title: 'Niko Dashboard',
  description: 'Manage your server security and AI moderation.',
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
