import { Message } from 'discord.js';
import { prisma } from '@niko/db';

export async function handleAfkCommand(message: Message, args: string[]) {
  const sub = args[0]?.toLowerCase();

  if (sub === 'remove') {
    const afk = await (prisma as any).afkStatus.findUnique({ where: { userId: message.author.id } });
    if (afk) {
      await (prisma as any).afkStatus.delete({ where: { userId: message.author.id } });
      return message.reply('Your AFK status has been removed.');
    } else {
      return message.reply('You are not currently AFK.');
    }
  }

  if (sub === 'status') {
    const afk = await (prisma as any).afkStatus.findUnique({ where: { userId: message.author.id } });
    if (afk) {
      const timeStr = formatDuration(Date.now() - afk.startedAt.getTime());
      return message.reply(`You have been AFK for ${timeStr}. Reason: ${afk.reason || 'None'}`);
    } else {
      return message.reply('You are not currently AFK.');
    }
  }

  // Set AFK
  const reason = args.join(' ') || 'AFK';
  await (prisma as any).afkStatus.upsert({
    where: { userId: message.author.id },
    update: { reason, startedAt: new Date() },
    create: { userId: message.author.id, reason }
  });
  return message.reply(`You are now AFK. Reason: ${reason}`);
}

export async function removeAfkIfActive(message: Message, prefix: string) {
  // Don't remove AFK if the user is running an AFK command
  if (message.content.toLowerCase().startsWith(`${prefix}afk`)) return;
  
  const afk = await (prisma as any).afkStatus.findUnique({ where: { userId: message.author.id } });
  if (afk) {
    await (prisma as any).afkStatus.delete({ where: { userId: message.author.id } });
    const timeStr = formatDuration(Date.now() - afk.startedAt.getTime());
    message.reply(`Welcome back <@${message.author.id}> — you were AFK for ${timeStr}.`);
  }
}

export async function checkAfkMentions(message: Message) {
  if (message.mentions.users.size === 0) return;
  
  for (const [userId, user] of message.mentions.users) {
    if (user.bot) continue;
    const afk = await (prisma as any).afkStatus.findUnique({ where: { userId } });
    if (afk) {
      const timeStr = formatDuration(Date.now() - afk.startedAt.getTime());
      message.reply(`<@${userId}> is currently AFK: ${afk.reason || 'AFK'} (for ${timeStr})`);
    }
  }
}

function formatDuration(ms: number) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (parts.length === 0) return `${seconds}s`;
  return parts.join(' ');
}
