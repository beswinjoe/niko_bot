import { Message } from 'discord.js';
import { prisma } from '@niko/db';

export async function handlePermissionsCommand(message: Message, args: string[]) {
  if (!message.guild || !message.member) return;

  if (message.author.id !== message.guild.ownerId && !message.member.permissions.has('ManageGuild')) {
    return message.reply('You do not have permission to manage bot permissions.');
  }

  const sub = args[0]?.toLowerCase();

  if (sub === 'add' || sub === 'remove') {
    const roleArg = args[1];
    const roleId = roleArg?.match(/^<@&(\d+)>$/)?.[1] || roleArg;
    
    if (!roleId || !/^\d{17,19}$/.test(roleId)) {
      return message.reply('Please mention a valid role or provide a valid role ID.');
    }

    const commandName = args[2]?.toLowerCase();
    if (!commandName) {
      return message.reply('Please provide the command name to assign to this role (e.g. `ban`, `*`).');
    }

    const commandsToApply = commandName === '*' 
      ? ['warn', 'mute', 'tempmute', 'kick', 'ban', 'tempban', 'unban', 'purge', 'security']
      : [commandName];

    if (sub === 'add') {
      for (const cmd of commandsToApply) {
        await (prisma as any).roleCommandPermission.upsert({
          where: { guildId_roleId_command: { guildId: message.guild.id, roleId, command: cmd } },
          update: {},
          create: { guildId: message.guild.id, roleId, command: cmd }
        });
      }
      return message.reply(`Successfully added permission(s) for <@&${roleId}>.`);
    } else {
      for (const cmd of commandsToApply) {
        await (prisma as any).roleCommandPermission.deleteMany({
          where: { guildId: message.guild.id, roleId, command: cmd }
        });
      }
      return message.reply(`Successfully removed permission(s) for <@&${roleId}>.`);
    }
  }

  if (sub === 'list' || !sub) {
    const perms = await (prisma as any).roleCommandPermission.findMany({
      where: { guildId: message.guild.id },
      orderBy: { roleId: 'asc' }
    });

    if (perms.length === 0) {
      return message.reply('No role permissions have been configured for this server. Use `!permissions add @Role <command>` to set them up.');
    }

    // Group by Role
    const roleMap: Record<string, string[]> = {};
    for (const p of perms) {
      if (!roleMap[p.roleId]) roleMap[p.roleId] = [];
      roleMap[p.roleId].push(p.command);
    }

    let output = '**NIKO PERMISSIONS**\n\n';
    for (const [rId, cmds] of Object.entries(roleMap)) {
      output += `<@&${rId}>\n`;
      // Check if all commands
      const isAll = cmds.length >= 9 || cmds.includes('*');
      if (isAll) {
        output += `✓ *\n\n`;
      } else {
        cmds.forEach(c => output += `✓ ${c}\n`);
        output += '\n';
      }
    }

    return message.reply({ content: output, allowedMentions: { parse: [] } }); // Prevent mass ping
  }
}
