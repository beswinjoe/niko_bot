import { Guild, GuildMember } from 'discord.js';
import { prisma } from '@niko/db';

export class PermissionsService {
  public async addPermission(guild: Guild, member: GuildMember, roleId: string, commandName: string) {
    if (member.id !== guild.ownerId && !member.permissions.has('ManageGuild')) {
      return { success: false, error: 'You do not have permission to manage bot permissions.' };
    }

    if (!roleId || !/^\d{17,19}$/.test(roleId)) {
      return { success: false, error: 'Please mention a valid role or provide a valid role ID.' };
    }

    if (!commandName) {
      return { success: false, error: 'Please provide the command name to assign to this role (e.g. `ban`, `*`).' };
    }

    await (prisma as any).roleCommandPermission.upsert({
      where: { guildId_roleId_command: { guildId: guild.id, roleId, command: commandName } },
      update: {},
      create: { guildId: guild.id, roleId, command: commandName }
    });
    return { success: true, message: `Successfully added permission(s) for <@&${roleId}>.` };
  }

  public async removePermission(guild: Guild, member: GuildMember, roleId: string, commandName: string) {
    if (member.id !== guild.ownerId && !member.permissions.has('ManageGuild')) {
      return { success: false, error: 'You do not have permission to manage bot permissions.' };
    }

    if (!roleId || !/^\d{17,19}$/.test(roleId)) {
      return { success: false, error: 'Please mention a valid role or provide a valid role ID.' };
    }

    if (!commandName) {
      return { success: false, error: 'Please provide the command name to assign to this role (e.g. `ban`, `*`).' };
    }

    await (prisma as any).roleCommandPermission.deleteMany({
      where: { guildId: guild.id, roleId, command: commandName }
    });
    return { success: true, message: `Successfully removed permission(s) for <@&${roleId}>.` };
  }

  public async listPermissions(guild: Guild) {
    const perms = await (prisma as any).roleCommandPermission.findMany({
      where: { guildId: guild.id },
      orderBy: { roleId: 'asc' }
    });

    if (perms.length === 0) {
      return { success: false, error: 'No role permissions have been configured for this server. Use `!permissions add @Role <command>` to set them up.' };
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
      const isAll = cmds.includes('*');
      if (isAll) {
        output += `✓ *\n\n`;
      } else {
        cmds.forEach(c => output += `✓ ${c}\n`);
        output += '\n';
      }
    }

    return { success: true, message: output };
  }
}

export const permissionsService = new PermissionsService();
