import { Guild, GuildMember, EmbedBuilder } from 'discord.js';
import { prisma } from '@niko/db';

export class RulesService {
  public async addRule(guild: Guild, member: GuildMember, content: string) {
    const rolePerms = await (prisma as any).roleCommandPermission.findMany({ where: { guildId: guild.id } });
    const cmdPerms = rolePerms.filter((p: any) => p.command === 'rules' || p.command === '*');
    const hasPerm = member.id === guild.ownerId || 
      (cmdPerms.length > 0 ? cmdPerms.some((p: any) => member.roles.cache.has(p.roleId)) : false);

    if (!hasPerm && !member.permissions.has('ManageGuild')) {
      return { success: false, error: 'You do not have permission to manage rules. A server owner must configure `rules` permission for your role or grant you Manage Server.' };
    }
    if (!content) return { success: false, error: 'Please provide the rule content.' };
    
    await (prisma as any).rule.create({
      data: { guildId: guild.id, content }
    });
    return { success: true, message: 'Rule added successfully.' };
  }

  public async removeRule(guild: Guild, member: GuildMember, index: number) {
    const rolePerms = await (prisma as any).roleCommandPermission.findMany({ where: { guildId: guild.id } });
    const cmdPerms = rolePerms.filter((p: any) => p.command === 'rules' || p.command === '*');
    const hasPerm = member.id === guild.ownerId || 
      (cmdPerms.length > 0 ? cmdPerms.some((p: any) => member.roles.cache.has(p.roleId)) : false);

    if (!hasPerm && !member.permissions.has('ManageGuild')) {
      return { success: false, error: 'You do not have permission to manage rules. A server owner must configure `rules` permission for your role or grant you Manage Server.' };
    }
    if (isNaN(index) || index < 1) return { success: false, error: 'Please provide a valid rule number.' };

    const rules = await (prisma as any).rule.findMany({ where: { guildId: guild.id }, orderBy: { id: 'asc' } });
    if (index > rules.length) return { success: false, error: 'Rule number not found.' };

    const ruleToDelete = rules[index - 1];
    await (prisma as any).rule.delete({ where: { id: ruleToDelete.id } });
    return { success: true, message: `Rule ${index} removed.` };
  }

  public async listRules(guild: Guild) {
    const rules = await (prisma as any).rule.findMany({ where: { guildId: guild.id }, orderBy: { id: 'asc' } });
    if (rules.length === 0) return { success: false, error: 'No rules have been set for this server.' };

    const embed = new EmbedBuilder()
      .setColor('#5865F2')
      .setTitle('SERVER RULES')
      .setDescription(rules.map((r: any, i: number) => `**${i + 1}.** ${r.content}`).join('\n'));

    return { success: true, embed };
  }
}

export const rulesService = new RulesService();
