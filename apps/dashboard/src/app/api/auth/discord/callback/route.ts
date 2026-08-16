import { NextRequest, NextResponse } from 'next/server';
import { getDiscordToken, getDiscordUser, getAvatarUrl } from '@/lib/discord';
import { createSession } from '@/lib/session';
import { prisma } from "@niko/db";



export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const storedState = request.cookies.get('oauth_state')?.value;

  if (!code || !state || state !== storedState) {
    return NextResponse.json({ error: 'Invalid state or missing code' }, { status: 400 });
  }

  try {
    const tokenResponse = await getDiscordToken(code);
    const discordUser = await getDiscordUser(tokenResponse.access_token);
    const avatarUrl = getAvatarUrl(discordUser.id, discordUser.avatar);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userPayload: any = {
      username: discordUser.username,
      globalName: discordUser.global_name,
      avatar: avatarUrl,
      lastLoginAt: new Date(),
    };

    const user = await prisma.user.upsert({
      where: { id: discordUser.id },
      update: userPayload,
      create: {
        id: discordUser.id,
        ...userPayload
      },
    });

    await createSession(user.id);

    const response = NextResponse.redirect(new URL('/dashboard', request.url));
    response.cookies.delete('oauth_state');
    
    // Also store discord access token in http only cookie if needed for client side fetching of guilds, 
    // but better to fetch server side. We'll store it as an encrypted cookie to fetch guilds later.
    // For simplicity, we can fetch guilds in the dashboard page and cache it, or store the token.
    response.cookies.set('discord_token', tokenResponse.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: tokenResponse.expires_in,
      path: '/',
      sameSite: 'lax'
    });

    return response;
  } catch (error) {
    console.error('OAuth error:', error);
    return NextResponse.redirect(new URL('/login?error=oauth_failed', request.url));
  }
}
