import React from 'react';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { prisma } from '@niko/db';
import { getHealthAndRecommendations } from './intelligenceActions';
import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';
import { getDiscordUserGuilds } from '@/lib/discord';
import { cookies } from 'next/headers';

function getGuildIconUrl(guildId: string, iconHash: string | null) {
  if (!iconHash) return null;
  return `https://cdn.discordapp.com/icons/${guildId}/${iconHash}.png`;
}

export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ guildId: string }>;
}) {
  const session = await getSession();
  if (!session) redirect('/login');

  const { guildId } = await params;

  // Assuming you have Discord OAuth token to check if user has admin on this guild
  // Here we just fetch the guild if it exists
  const dbGuild = await prisma.guild.findUnique({
    where: { id: guildId },
  });

  if (!dbGuild) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Niko isn&apos;t installed yet</h1>
        <p className="text-neutral-400 mb-8 text-lg">Please invite the bot to view the dashboard.</p>
        <div className="flex gap-4 justify-center">
          <a href={`https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=277025508352&scope=bot%20applications.commands&guild_id=${guildId}`} 
             target="_blank" rel="noopener noreferrer" 
             className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-medium transition-colors">
            Add Niko
          </a>
          <Link href="/dashboard" className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-white rounded-xl font-medium transition-colors">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  // Get Discord user guilds to extract the icon hash
  const cookieStore = await cookies();
  const discordToken = cookieStore.get('discord_token')?.value;
  let iconUrl = null;
  
  if (discordToken) {
    try {
      const guilds = await getDiscordUserGuilds(discordToken);
      const discordGuild = guilds.find(g => g.id === guildId);
      if (discordGuild) {
        iconUrl = getGuildIconUrl(guildId, discordGuild.icon);
      }
    } catch (error) {
      console.error('Failed to fetch Discord guilds for icon in layout', error);
    }
  }

  const healthData = await getHealthAndRecommendations(guildId);

  return (
    <DashboardLayout 
      guildId={guildId}
      guildName={dbGuild.name}
      guildIconUrl={iconUrl}
      healthScore={healthData.score}
    >
      {children}
    </DashboardLayout>
  );
}
