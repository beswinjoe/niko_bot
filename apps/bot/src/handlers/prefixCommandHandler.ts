import { Message, EmbedBuilder } from 'discord.js';
import { prisma } from '@niko/db';
import { moderationService, ModerationAction } from '../services/moderationService';
import { parseDuration } from '../utils/duration';
import { handleRulesCommand } from '../commands/rules';
import { handleAfkCommand, removeAfkIfActive, checkAfkMentions } from '../commands/afk';
import { handlePermissionsCommand } from '../commands/permissions';
import { handleHelpCommand } from '../commands/help';

export async function handlePrefixCommand(message: Message) {
  if (!message.guild || !message.member || !message.client.user || message.author.bot) return;

  const settings = await (prisma as any).guildSetting.findUnique({ where: { guildId: message.guild.id } });
  const prefix = settings?.prefix || '!';

  // AFK check & mentions handling (runs on every message, not just commands)
  await removeAfkIfActive(message, prefix);
  await checkAfkMentions(message);

  if (!message.content.startsWith(prefix)) return;

  // Parse arguments handling quoted strings
  const args = message.content.slice(prefix.length).trim().match(/(?:[^\s"]+|"[^"]*")+/g)?.map(a => a.replace(/"/g, '')) || [];
  const command = args.shift()?.toLowerCase();

  if (!command) return;

  if (command === 'rules') return handleRulesCommand(message, args);
  if (command === 'afk') return handleAfkCommand(message, args);
  if (command === 'permissions') return handlePermissionsCommand(message, args);
  if (command === 'help') return handleHelpCommand(message, prefix);
  
  if (command === 'config' && args[0] === 'prefix') {
    if (message.member.id !== message.guild.ownerId && !message.member.permissions.has('ManageGuild')) {
      return message.reply('You do not have permission to change the prefix.');
    }
    const newPrefix = args[1];
    if (!newPrefix) return message.reply('Please provide a new prefix.');
    if (newPrefix.length > 5) return message.reply('Prefix cannot be longer than 5 characters.');
    
    await (prisma as any).guildSetting.upsert({
      where: { guildId: message.guild.id },
      update: { prefix: newPrefix } as any,
      create: { guildId: message.guild.id, prefix: newPrefix } as any
    });
    return message.reply(`Prefix updated to \`${newPrefix}\``);
  }

  // Moderation commands
  const validModCommands = ['warn', 'mute', 'tempmute', 'kick', 'ban', 'tempban', 'unban', 'purge', 'cases'];
  if (!validModCommands.includes(command)) return;

  if (command === 'purge') {
     const rolePerms = await (prisma as any).roleCommandPermission.findMany({ where: { guildId: message.guild.id } });
     const cmdPerms = rolePerms.filter((p: any) => p.command === 'purge');
     const hasPerm = message.member.id === message.guild.ownerId || 
       (cmdPerms.length > 0 ? cmdPerms.some((p: any) => message.member!.roles.cache.has(p.roleId)) : true); // allow via Discord perms if no roles set

     if (!hasPerm) return message.reply('You lack the configured role required for this command.');
     if (!message.member.permissions.has('ManageMessages')) return message.reply('You do not have permission to use this command.');
     
     const amount = parseInt(args[0]);
     if (isNaN(amount) || amount < 1 || amount > 100) return message.reply('Please provide a valid amount between 1 and 100.');
     
     if (message.channel.isTextBased() && 'bulkDelete' in message.channel) {
       const deleted = await message.channel.bulkDelete(amount, true).catch(() => null);
       if (deleted) return message.channel.send(`Successfully purged ${deleted.size} messages.`).then(m => setTimeout(() => m.delete().catch(() => {}), 3000));
     }
     return message.reply('Failed to purge messages.');
  }

  if (command === 'cases') {
    // !cases [@user]
    const filterUserId = args[0] ? args[0].match(/^<@!?(\d+)>$/)?.[1] || args[0] : null;
    const where: any = { guildId: message.guild.id };
    if (filterUserId) where.userId = filterUserId;

    const cases = await (prisma as any).moderationCase.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    const embed = new EmbedBuilder().setColor('#3B82F6').setTitle(`Moderation Cases`);
    if (cases.length === 0) embed.setDescription('No cases found.');
    else {
      embed.setDescription(cases.map((c: any) => 
        `\`#${c.id}\` **${c.type}** | Target: <@${c.userId}> | Mod: <@${c.moderatorId}> | Reason: ${c.reason || 'None'}` + 
        (c.duration ? ` | Duration: ${c.duration}` : '')
      ).join('\n'));
    }
    return message.reply({ embeds: [embed] });
  }

  if (args.length < 1) {
    return message.reply('Please provide a user to moderate.');
  }

  const targetArg = args.shift()!;
  const targetIdMatch = targetArg.match(/^<@!?(\d+)>$/);
  const targetId = targetIdMatch ? targetIdMatch[1] : targetArg;

  if (!/^\d{17,19}$/.test(targetId)) {
    return message.reply('Invalid user ID or mention.');
  }

  if (command === 'unban') {
     const rolePerms = await (prisma as any).roleCommandPermission.findMany({ where: { guildId: message.guild.id } });
     const cmdPerms = rolePerms.filter((p: any) => p.command === 'unban' || p.command === 'ban');
     const hasPerm = message.member.id === message.guild.ownerId || 
       (cmdPerms.length > 0 ? cmdPerms.some((p: any) => message.member!.roles.cache.has(p.roleId)) : true);

     if (!hasPerm) return message.reply('You lack the configured role required for this command.');
     if (!message.member.permissions.has('BanMembers')) return message.reply('You do not have permission to unban members.');

     const reason = args.join(' ') || 'No reason provided';
     
     try {
       await message.guild.members.unban(targetId, reason);
       await (prisma as any).moderationCase.create({
         data: {
           guildId: message.guild.id,
           userId: targetId,
           moderatorId: message.member.id,
           type: 'UNBAN',
           reason
         } as any
       });
       return message.reply(`Successfully unbanned <@${targetId}>.`);
     } catch (e: any) {
       return message.reply(`Failed to unban user: ${e.message}`);
     }
  }

  const targetUser = await message.client.users.fetch(targetId).catch(() => null);
  if (!targetUser) {
    return message.reply('User not found.');
  }

  let action: ModerationAction | null = null;
  let durationStr: string | null = null;
  
  if (command === 'warn') action = 'WARN';
  if (command === 'mute' || command === 'tempmute') action = 'TIMEOUT';
  if (command === 'kick') action = 'KICK';
  if (command === 'ban' || command === 'tempban') action = 'BAN';

  if (!action) return;

  if (command === 'tempmute' || command === 'mute' || command === 'tempban' || command === 'ban') {
    if (args.length > 0) {
      const possibleDuration = args[0];
      if (parseDuration(possibleDuration)) {
        durationStr = args.shift()!;
      } else if (command === 'tempmute' || command === 'mute') {
         return message.reply('Please provide a valid duration format (e.g. 10m).');
      }
    } else if (command === 'mute' || command === 'tempmute') {
      return message.reply('Please provide a duration (e.g. 10m).');
    }
  }

  const reason = args.join(' ') || 'No reason provided';

  const result = await moderationService.executeAction(
    message.client,
    message.guild,
    message.member,
    targetUser,
    action,
    reason,
    durationStr
  );

  if (!result.success) {
    return message.reply({ content: result.error });
  } else if (result.embed) {
    return message.reply({ embeds: [result.embed] });
  }
}
