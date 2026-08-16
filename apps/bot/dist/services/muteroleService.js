"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.muteroleService = exports.MuteroleService = void 0;
const discord_js_1 = require("discord.js");
const db_1 = require("@niko/db");
const CacheManager_1 = require("../cache/CacheManager");
class MuteroleService {
    async getMuteRole(guild, prefix) {
        const settings = await CacheManager_1.cache.getGuildSettings(guild.id);
        if (!settings || !settings.mutedRole) {
            return { success: false, error: `⚠️ This server does not have a mute role configured.\n\nUse \`${prefix}muterole @Role\` to set one or \`${prefix}muterole create [name]\` to create one.` };
        }
        const role = guild.roles.cache.get(settings.mutedRole);
        if (!role) {
            return { success: false, error: `⚠️ The configured mute role was deleted or cannot be found.\n\nUse \`${prefix}muterole @Role\` to set one or \`${prefix}muterole create [name]\` to create one.` };
        }
        return { success: true, message: `The current mute role is configured to: <@&${role.id}>` };
    }
    async setMuteRole(guild, member, roleId) {
        const rolePerms = await db_1.prisma.roleCommandPermission.findMany({ where: { guildId: guild.id } });
        const cmdPerms = rolePerms.filter((p) => p.command === 'muterole' || p.command === '*');
        const hasPerm = member.id === guild.ownerId ||
            (cmdPerms.length > 0 ? cmdPerms.some((p) => member.roles.cache.has(p.roleId)) : false);
        if (!hasPerm && !member.permissions.has(discord_js_1.PermissionFlagsBits.ManageGuild)) {
            return { success: false, error: '⚠️ You do not have permission to manage the mute role. A server owner must configure `muterole` permission for your role or grant you Manage Server.' };
        }
        const role = guild.roles.cache.get(roleId);
        if (!role) {
            return { success: false, error: '⚠️ The specified role could not be found.' };
        }
        await db_1.prisma.guildSetting.upsert({
            where: { guildId: guild.id },
            update: { mutedRole: role.id },
            create: { guildId: guild.id, mutedRole: role.id }
        });
        CacheManager_1.cache.invalidateGuildSettings(guild.id);
        return { success: true, message: `✓ Mute role configured: <@&${role.id}>` };
    }
    async createMuteRole(guild, member, roleName = 'Muted') {
        const rolePerms = await db_1.prisma.roleCommandPermission.findMany({ where: { guildId: guild.id } });
        const cmdPerms = rolePerms.filter((p) => p.command === 'muterole' || p.command === '*');
        const hasPerm = member.id === guild.ownerId ||
            (cmdPerms.length > 0 ? cmdPerms.some((p) => member.roles.cache.has(p.roleId)) : false);
        if (!hasPerm && !member.permissions.has(discord_js_1.PermissionFlagsBits.ManageGuild)) {
            return { success: false, error: '⚠️ You do not have permission to manage the mute role. A server owner must configure `muterole` permission for your role or grant you Manage Server.' };
        }
        const me = guild.members.me;
        if (!me?.permissions.has(discord_js_1.PermissionFlagsBits.ManageRoles)) {
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
            await db_1.prisma.guildSetting.upsert({
                where: { guildId: guild.id },
                update: { mutedRole: newRole.id },
                create: { guildId: guild.id, mutedRole: newRole.id }
            });
            CacheManager_1.cache.invalidateGuildSettings(guild.id);
            return { success: true, message: `✓ Mute role created and configured: <@&${newRole.id}>` };
        }
        catch (e) {
            return { success: false, error: `⚠️ Failed to create role: ${e.message}` };
        }
    }
    async removeMuteRole(guild, member) {
        const rolePerms = await db_1.prisma.roleCommandPermission.findMany({ where: { guildId: guild.id } });
        const cmdPerms = rolePerms.filter((p) => p.command === 'muterole' || p.command === '*');
        const hasPerm = member.id === guild.ownerId ||
            (cmdPerms.length > 0 ? cmdPerms.some((p) => member.roles.cache.has(p.roleId)) : false);
        if (!hasPerm && !member.permissions.has(discord_js_1.PermissionFlagsBits.ManageGuild)) {
            return { success: false, error: '⚠️ You do not have permission to manage the mute role. A server owner must configure `muterole` permission for your role or grant you Manage Server.' };
        }
        await db_1.prisma.guildSetting.upsert({
            where: { guildId: guild.id },
            update: { mutedRole: null },
            create: { guildId: guild.id, mutedRole: null }
        });
        CacheManager_1.cache.invalidateGuildSettings(guild.id);
        return { success: true, message: `✓ Mute role configuration removed.` };
    }
}
exports.MuteroleService = MuteroleService;
exports.muteroleService = new MuteroleService();
