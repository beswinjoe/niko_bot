import { NextResponse } from 'next/server';
import { deleteSession } from '@/lib/session';

export async function POST() {
  await deleteSession();
  const response = NextResponse.json({ success: true });
  response.cookies.delete('discord_token');
  return response;
}
