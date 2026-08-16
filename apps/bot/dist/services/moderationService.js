"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moderationService = exports.ModerationService = void 0;
const discord_js_1 = require("discord.js");
const db_1 = require("@niko/db");
const duration_1 = require("../utils/duration");
const worker_1 = require("../worker");
class ModerationService {
    async executeAction(client, guild, moderator, targetUser, action, reason, durationStr) {
        try {
            // Upsert DB records in parallel
            await Promise.all([
                db_1.prisma.user.upsert({
                    where: { id: targetUser.id },
                    update: { username: targetUser.username },
                    create: { id: targetUser.id, username: targetUser.username }
                }),
                db_1.prisma.user.upsert({
                    where: { id: moderator.user.id },
                    update: { username: moderator.user.username },
                    create: { id: moderator.user.id, username: moderator.user.username }
                }),
                db_1.prisma.guild.upsert({
                    where: { id: guild.id },
                    update: { name: guild.name },
                    create: { id: guild.id, name: guild.name }
                })
            ]);
            const targetMember = await guild.members.fetch(targetUser.id).catch(() => null);
            // Check role hierarchy if target is in the server
            if (targetMember) {
                if (targetMember.id === guild.ownerId) {
                    return { success: false, error: 'You cannot moderate the server owner.' };
                }
                if (targetMember.id === client.user?.id) {
                    return { success: false, error: 'I cannot moderate myself.' };
                }
                if (targetMember.roles.highest.position >= moderator.roles.highest.position && moderator.id !== guild.ownerId) {
                    return { success: false, error: 'You cannot moderate a user with an equal or higher role.' };
                }
                const me = guild.members.me;
                if (me && targetMember.roles.highest.position >= me.roles.highest.position) {
                    return { success: false, error: 'I cannot moderate this user due to role hierarchy.' };
                }
            }
            // Fetch Server Configuration & command permissions in parallel
            const [settings, rolePerms] = await Promise.all([
                db_1.prisma.guildSetting.findUnique({ where: { guildId: guild.id } }),
                db_1.prisma.roleCommandPermission.findMany({ where: { guildId: guild.id } })
            ]);
            const prefix = settings?.prefix || '$';
            // Helper for role checks
            const checkRole = (cmdName) => {
                if (moderator.id === guild.ownerId)
                    return true;
                const cmdPerms = rolePerms.filter((p) => p.command === cmdName || p.command === '*');
                if (cmdPerms.length === 0) {
                    return false;
                }
                return cmdPerms.some((p) => moderator.roles.cache.has(p.roleId));
            };
            let actionDesc = '';
            let color = '#7C3AED';
            let parsedDurationLabel;
            let actionMs = null;
            if (action === 'WARN') {
                if (!checkRole('warn')) {
                    return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role warn\`` };
                }
                if (!moderator.permissions.has(discord_js_1.PermissionFlagsBits.ModerateMembers)) {
                    return { success: false, error: '⚠️ You do not have the Discord permission to warn members.' };
                }
                await db_1.prisma.warning.create({
                    data: { guildId: guild.id, userId: targetUser.id, reason }
                });
                actionDesc = 'Warn';
            }
            else if (action === 'TIMEOUT') {
                if (!checkRole('timeout') && !checkRole('mute')) {
                    return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role mute\`` };
                }
                if (!moderator.permissions.has(discord_js_1.PermissionFlagsBits.ModerateMembers)) {
                    return { success: false, error: '⚠️ You do not have the Discord permission to mute members.' };
                }
                if (!targetMember)
                    return { success: false, error: 'User is not in the server.' };
                const muteRole = settings?.mutedRole ? guild.roles.cache.get(settings.mutedRole) : null;
                if (!muteRole) {
                    return { success: false, error: `⚠️ This server does not have a mute role configured.\n\nUse \`${prefix}muterole @Role\` to set one or \`${prefix}muterole create [name]\` to create one.` };
                }
                const me = guild.members.me;
                if (!me?.permissions.has(discord_js_1.PermissionFlagsBits.ManageRoles)) {
                    return { success: false, error: '⚠️ Niko needs the `Manage Roles` permission to perform this action.' };
                }
                if (muteRole.position >= me.roles.highest.position) {
                    return { success: false, error: '⚠️ Niko cannot manage that role because it is equal to or higher than Niko\'s highest role.' };
                }
                if (!durationStr)
                    return { success: false, error: 'Duration is required for timeout.' };
                const ms = (0, duration_1.parseDuration)(durationStr);
                if (!ms || !(0, duration_1.validateTimeoutDuration)(ms)) {
                    return { success: false, error: 'Invalid duration. Max timeout is 28 days. Format: 10m, 1h, 1d.' };
                }
                actionMs = ms;
                await Promise.all([
                    targetMember.roles.add(muteRole, reason),
                    targetMember.timeout(ms, reason).catch(() => null) // Fallback to timeout, but don't fail if permissions are weird.
                ]);
                actionDesc = 'Mute';
                parsedDurationLabel = durationStr;
            }
            else if (action === 'KICK') {
                if (!checkRole('kick')) {
                    return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role kick\`` };
                }
                if (!moderator.permissions.has(discord_js_1.PermissionFlagsBits.KickMembers)) {
                    return { success: false, error: '⚠️ You do not have the Discord permission to kick members.' };
                }
                if (!targetMember)
                    return { success: false, error: 'User is not in the server.' };
                const me = guild.members.me;
                if (!me?.permissions.has(discord_js_1.PermissionFlagsBits.KickMembers)) {
                    return { success: false, error: '⚠️ Niko needs the `Kick Members` permission to perform this action.' };
                }
                await targetMember.kick(reason);
                actionDesc = 'Kick';
            }
            else if (action === 'BAN') {
                if (!checkRole('ban')) {
                    return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role ban\`` };
                }
                if (!moderator.permissions.has(discord_js_1.PermissionFlagsBits.BanMembers)) {
                    return { success: false, error: '⚠️ You do not have the Discord permission to ban members.' };
                }
                const me = guild.members.me;
                if (!me?.permissions.has(discord_js_1.PermissionFlagsBits.BanMembers)) {
                    return { success: false, error: '⚠️ Niko needs the `Ban Members` permission to perform this action.' };
                }
                let ms = null;
                if (durationStr) {
                    ms = (0, duration_1.parseDuration)(durationStr);
                    if (!ms)
                        return { success: false, error: 'Invalid duration format (e.g. 1h, 7d).' };
                    parsedDurationLabel = durationStr;
                    actionMs = ms;
                }
                await guild.members.ban(targetUser.id, { reason }).catch(err => {
                    throw new Error('Failed to ban user: ' + err.message);
                });
                if (ms) {
                    await worker_1.boss.send('unban', { guildId: guild.id, userId: targetUser.id }, {
                        startAfter: Math.floor(Date.now() / 1000) + Math.floor(ms / 1000),
                        singletonKey: `unban-${guild.id}-${targetUser.id}`
                    });
                }
                actionDesc = 'Ban';
                color = '#E53E3E';
            }
            // Create Moderation Case
            const modCase = await db_1.prisma.moderationCase.create({
                data: {
                    guildId: guild.id,
                    userId: targetUser.id,
                    moderatorId: moderator.user.id,
                    type: action,
                    reason,
                    duration: parsedDurationLabel,
                    expiresAt: actionMs ? new Date(Date.now() + actionMs) : null
                }
            });
            // DM the target user (silently fail if DMs are closed, run asynchronously)
            const dmVerbs = {
                WARN: `You were warned in ${guild.name}.`,
                TIMEOUT: `You were muted in ${guild.name}.`,
                KICK: `You were kicked from ${guild.name}.`,
                BAN: `You were banned from ${guild.name}.`,
            };
            targetUser.send(`${dmVerbs[action]}\nReason: ${reason}`).catch(() => { });
            const embed = new discord_js_1.EmbedBuilder()
                .setColor(color)
                .setTitle(`Niko Moderation`)
                .setDescription(`**Action:** ${actionDesc}\n` +
                `**User:** ${targetUser.tag} (<@${targetUser.id}>)\n` +
                (parsedDurationLabel ? `**Duration:** ${parsedDurationLabel}\n` : '') +
                `**Moderator:** ${moderator.user.tag} (<@${moderator.user.id}>)\n` +
                `**Reason:** ${reason}`)
                .setFooter({ text: `Case #${modCase.id}` })
                .setTimestamp();
            return { success: true, embed };
        }
        catch (error) {
            console.error('[ModerationService] Error:', error);
            return { success: false, error: error.message || 'An internal error occurred.' };
        }
    }
    async purge(client, guild, moderator, channel, amount) {
        const settings = await db_1.prisma.guildSetting.findUnique({ where: { guildId: guild.id } });
        const prefix = settings?.prefix || '$';
        const rolePerms = await db_1.prisma.roleCommandPermission.findMany({ where: { guildId: guild.id } });
        const cmdPerms = rolePerms.filter((p) => p.command === 'purge' || p.command === '*');
        const hasPerm = moderator.id === guild.ownerId ||
            (cmdPerms.length > 0 ? cmdPerms.some((p) => moderator.roles.cache.has(p.roleId)) : false);
        if (!hasPerm)
            return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role purge\`` };
        if (!moderator.permissions.has(discord_js_1.PermissionFlagsBits.ManageMessages))
            return { success: false, error: '⚠️ You do not have the Discord permission to manage messages.' };
        if (isNaN(amount) || amount < 1 || amount > 100)
            return { success: false, error: 'Please provide a valid amount between 1 and 100.' };
        if (channel.isTextBased() && 'bulkDelete' in channel) {
            const deleted = await channel.bulkDelete(amount, true).catch(() => null);
            if (deleted)
                return { success: true, embed: new discord_js_1.EmbedBuilder().setColor('#10B981').setDescription(`Successfully purged ${deleted.size} messages.`) };
        }
        return { success: false, error: 'Failed to purge messages or cannot purge in this channel type.' };
    }
    async unban(client, guild, moderator, targetId, reason) {
        const settings = await db_1.prisma.guildSetting.findUnique({ where: { guildId: guild.id } });
        const prefix = settings?.prefix || '$';
        const rolePerms = await db_1.prisma.roleCommandPermission.findMany({ where: { guildId: guild.id } });
        const cmdPerms = rolePerms.filter((p) => p.command === 'unban' || p.command === 'ban' || p.command === '*');
        const hasPerm = moderator.id === guild.ownerId ||
            (cmdPerms.length > 0 ? cmdPerms.some((p) => moderator.roles.cache.has(p.roleId)) : false);
        if (!hasPerm)
            return { success: false, error: `⚠️ This command has not been assigned to any of your roles.\n\nA server owner can configure it with:\n\`${prefix}permissions add @Role unban\`` };
        if (!moderator.permissions.has(discord_js_1.PermissionFlagsBits.BanMembers))
            return { success: false, error: '⚠️ You do not have the Discord permission to unban members.' };
        const me = guild.members.me;
        if (!me?.permissions.has(discord_js_1.PermissionFlagsBits.BanMembers)) {
            return { success: false, error: '⚠️ Niko needs the `Ban Members` permission to perform this action.' };
        }
        try {
            await guild.members.unban(targetId, reason);
            try {
                const userToDm = await client.users.fetch(targetId);
                if (userToDm) {
                    await userToDm.send(`You were unbanned from ${guild.name}.\nReason: ${reason}`);
                }
            }
            catch {
                // Silently fail DM
            }
            const modCase = await db_1.prisma.moderationCase.create({
                data: {
                    guildId: guild.id,
                    userId: targetId,
                    moderatorId: moderator.user.id,
                    type: 'UNBAN',
                    reason
                }
            });
            return { success: true, embed: new discord_js_1.EmbedBuilder().setColor('#10B981').setDescription(`Successfully unbanned <@${targetId}>. Case #${modCase.id}`) };
        }
        catch (e) {
            return { success: false, error: `Failed to unban user: ${e.message}` };
        }
    }
    async getCases(guild, targetUserId, actionType) {
        const where = { guildId: guild.id };
        if (targetUserId)
            where.userId = targetUserId;
        if (actionType)
            where.type = actionType;
        const cases = await db_1.prisma.moderationCase.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            take: 10
        });
        const embed = new discord_js_1.EmbedBuilder().setColor('#3B82F6').setTitle(`Moderation Cases`);
        if (cases.length === 0)
            embed.setDescription('No cases found.');
        else {
            embed.setDescription(cases.map((c) => `\`#${c.id}\` **${c.type}** | Target: <@${c.userId}> | Mod: <@${c.moderatorId}> | Reason: ${c.reason || 'None'}` +
                (c.duration ? ` | Duration: ${c.duration}` : '')).join('\n'));
        }
        return { success: true, embed };
    }
}
exports.ModerationService = ModerationService;
exports.moderationService = new ModerationService();
