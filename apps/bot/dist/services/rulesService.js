"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rulesService = exports.RulesService = void 0;
const discord_js_1 = require("discord.js");
const db_1 = require("@niko/db");
class RulesService {
    async addRule(guild, member, content) {
        const rolePerms = await db_1.prisma.roleCommandPermission.findMany({ where: { guildId: guild.id } });
        const cmdPerms = rolePerms.filter((p) => p.command === 'rules' || p.command === '*');
        const hasPerm = member.id === guild.ownerId ||
            (cmdPerms.length > 0 ? cmdPerms.some((p) => member.roles.cache.has(p.roleId)) : false);
        if (!hasPerm && !member.permissions.has('ManageGuild')) {
            return { success: false, error: 'You do not have permission to manage rules. A server owner must configure `rules` permission for your role or grant you Manage Server.' };
        }
        if (!content)
            return { success: false, error: 'Please provide the rule content.' };
        await db_1.prisma.rule.create({
            data: { guildId: guild.id, content }
        });
        return { success: true, message: 'Rule added successfully.' };
    }
    async removeRule(guild, member, index) {
        const rolePerms = await db_1.prisma.roleCommandPermission.findMany({ where: { guildId: guild.id } });
        const cmdPerms = rolePerms.filter((p) => p.command === 'rules' || p.command === '*');
        const hasPerm = member.id === guild.ownerId ||
            (cmdPerms.length > 0 ? cmdPerms.some((p) => member.roles.cache.has(p.roleId)) : false);
        if (!hasPerm && !member.permissions.has('ManageGuild')) {
            return { success: false, error: 'You do not have permission to manage rules. A server owner must configure `rules` permission for your role or grant you Manage Server.' };
        }
        if (isNaN(index) || index < 1)
            return { success: false, error: 'Please provide a valid rule number.' };
        const rules = await db_1.prisma.rule.findMany({ where: { guildId: guild.id }, orderBy: { id: 'asc' } });
        if (index > rules.length)
            return { success: false, error: 'Rule number not found.' };
        const ruleToDelete = rules[index - 1];
        await db_1.prisma.rule.delete({ where: { id: ruleToDelete.id } });
        return { success: true, message: `Rule ${index} removed.` };
    }
    async listRules(guild) {
        const rules = await db_1.prisma.rule.findMany({ where: { guildId: guild.id }, orderBy: { id: 'asc' } });
        if (rules.length === 0)
            return { success: false, error: 'No rules have been set for this server.' };
        const embed = new discord_js_1.EmbedBuilder()
            .setColor('#5865F2')
            .setTitle('SERVER RULES')
            .setDescription(rules.map((r, i) => `**${i + 1}.** ${r.content}`).join('\n'));
        return { success: true, embed };
    }
}
exports.RulesService = RulesService;
exports.rulesService = new RulesService();
