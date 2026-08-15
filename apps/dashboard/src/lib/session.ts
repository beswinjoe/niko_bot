import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@niko/db';
import crypto from 'crypto';

const prisma = new PrismaClient();

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const sessionId = crypto.randomUUID();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (prisma as any).session.create({
    data: {
      id: sessionId,
      userId,
      expiresAt,
    }
  });
  
  const cookieStore = await cookies();
  cookieStore.set('session', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('session')?.value;
  
  if (!sessionId) return null;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const session = await (prisma as any).session.findUnique({
    where: { id: sessionId }
  });
  
  if (!session || session.expiresAt < new Date()) {
    return null;
  }
  
  // Update lastUsedAt asynchronously
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (prisma as any).session.update({
    where: { id: sessionId },
    data: { lastUsedAt: new Date() }
  }).catch(() => {});
  
  return session;
}

export async function deleteSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('session')?.value;
  
  if (sessionId) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (prisma as any).session.delete({
      where: { id: sessionId }
    }).catch(() => {});
  }
  
  cookieStore.delete('session');
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  if (!session) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dbSession = await (prisma as any).session.findUnique({
    where: { id: session }
  });

  if (!dbSession || dbSession.expiresAt < new Date()) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (prisma as any).session.update({
    where: { id: session },
    data: { expiresAt: expires, lastUsedAt: new Date() }
  });
  
  const res = NextResponse.next();
  res.cookies.set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expires,
    sameSite: 'lax',
    path: '/',
  });
  
  return res;
}
