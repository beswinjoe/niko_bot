import { Guild, GuildMember, PermissionFlagsBits } from 'discord.js';
import { prisma } from '@niko/db';
import { cache } from '../cache/CacheManager';

export class MuteroleService {
  public async getMuteRole(guild: Guild, prefix: string) {
    const settings = await cache.getGuildSettings(guild.id);
    if (!settings || !settings.mutedRole) {
      return { success: false, error: `⚠️ This server does not have a mute role configured.\n\nUse \`${prefix}muterole @Role\` to set one or \`${prefix}muterole create [name]\` to create one.` };
    }

    const role = guild.roles.cache.get(settings.mutedRole);
    if (!role) {
      return { success: false, error: `⚠️ The configured mute role was deleted or cannot be found.\n\nUse \`${prefix}muterole @Role\` to set one or \`${prefix}muterole create [name]\` to create one.` };
    }

    return { success: true, message: `The current mute role is configured to: <@&${role.id}>` };
  }

  public async setMuteRole(guild: Guild, member: GuildMember, roleId: string) {
    const rolePerms = await (prisma as any).roleCommandPermission.findMany({ where: { guildId: guild.id } });
    const cmdPerms = rolePerms.filter((p: any) => p.command === 'muterole' || p.command === '*');
    const hasPerm = member.id === guild.ownerId || 
      (cmdPerms.length > 0 ? cmdPerms.some((p: any) => member.roles.cache.has(p.roleId)) : false);

    if (!hasPerm && !member.permissions.has(PermissionFlagsBits.ManageGuild)) {
      return { success: false, error: '⚠️ You do not have permission to manage the mute role. A server owner must configure `muterole` permission for your role or grant you Manage Server.' };
    }

    const role = guild.roles.cache.get(roleId);
    if (!role) {
      return { success: false, error: '⚠️ The specified role could not be found.' };
    }

    await (prisma as any).guildSetting.upsert({
      where: { guildId: guild.id },
      update: { mutedRole: role.id },
      create: { guildId: guild.id, mutedRole: role.id }
    });

    cache.invalidateGuildSettings(guild.id);

    return { success: true, message: `✓ Mute role configured: <@&${role.id}>` };
  }

  public async createMuteRole(guild: Guild, member: GuildMember, roleName: string = 'Muted') {
    const rolePerms = await (prisma as any).roleCommandPermission.findMany({ where: { guildId: guild.id } });
    const cmdPerms = rolePerms.filter((p: any) => p.command === 'muterole' || p.command === '*');
    const hasPerm = member.id === guild.ownerId || 
      (cmdPerms.length > 0 ? cmdPerms.some((p: any) => member.roles.cache.has(p.roleId)) : false);

    if (!hasPerm && !member.permissions.has(PermissionFlagsBits.ManageGuild)) {
      return { success: false, error: '⚠️ You do not have permission to manage the mute role. A server owner must configure `muterole` permission for your role or grant you Manage Server.' };
    }

    const me = guild.members.me;
    if (!me?.permissions.has(PermissionFlagsBits.ManageRoles)) {
      return { success: false, error: '⚠️ Niko needs the `Manage Roles` permission to perform this action.' };
    }

    try {
      const newRole = await guild.roles.create({
        name: roleName,
        reason: 'Niko Mute Role Creation',
        permissions: [] // no permissions by default
      });

      // Optionally deny send messages in all channels? Not strictly required by the prompt,
      // but good practice. The prompt just says "Create a new Discord role named Muted and configure it."
      
      await (prisma as any).guildSetting.upsert({
        where: { guildId: guild.id },
        update: { mutedRole: newRole.id },
        create: { guildId: guild.id, mutedRole: newRole.id }
      });

      cache.invalidateGuildSettings(guild.id);

      return { success: true, message: `✓ Mute role created and configured: <@&${newRole.id}>` };
    } catch (e: any) {
      return { success: false, error: `⚠️ Failed to create role: ${e.message}` };
    }
  }

  public async removeMuteRole(guild: Guild, member: GuildMember) {
    const rolePerms = await (prisma as any).roleCommandPermission.findMany({ where: { guildId: guild.id } });
    const cmdPerms = rolePerms.filter((p: any) => p.command === 'muterole' || p.command === '*');
    const hasPerm = member.id === guild.ownerId || 
      (cmdPerms.length > 0 ? cmdPerms.some((p: any) => member.roles.cache.has(p.roleId)) : false);

    if (!hasPerm && !member.permissions.has(PermissionFlagsBits.ManageGuild)) {
      return { success: false, error: '⚠️ You do not have permission to manage the mute role. A server owner must configure `muterole` permission for your role or grant you Manage Server.' };
    }

    await (prisma as any).guildSetting.upsert({
      where: { guildId: guild.id },
      update: { mutedRole: null },
      create: { guildId: guild.id, mutedRole: null }
    });

    cache.invalidateGuildSettings(guild.id);

    return { success: true, message: `✓ Mute role configuration removed.` };
  }
}

export const muteroleService = new MuteroleService();
