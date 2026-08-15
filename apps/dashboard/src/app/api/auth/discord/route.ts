import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET() {
  // Generate a random state for CSRF protection
  const state = crypto.randomBytes(16).toString('hex');
  
  const discordAuthUrl = new URL('https://discord.com/api/oauth2/authorize');
  discordAuthUrl.searchParams.set('client_id', process.env.DISCORD_CLIENT_ID!);
  discordAuthUrl.searchParams.set('redirect_uri', process.env.DISCORD_REDIRECT_URI!);
  discordAuthUrl.searchParams.set('response_type', 'code');
  discordAuthUrl.searchParams.set('scope', 'identify guilds');
  discordAuthUrl.searchParams.set('state', state);

  const response = NextResponse.redirect(discordAuthUrl.toString());
  
  // Store state in a cookie to verify in callback
  response.cookies.set('oauth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 10, // 10 minutes
    path: '/',
    sameSite: 'lax'
  });

  return response;
}
