import { Message, EmbedBuilder } from 'discord.js';
import { prisma } from '@niko/db';

export async function handleRulesCommand(message: Message, args: string[]) {
  if (!message.guild) return;

  const sub = args[0]?.toLowerCase();

  if (sub === 'add') {
    if (!message.member?.permissions.has('ManageGuild') && message.author.id !== message.guild.ownerId) {
      return message.reply('You need Manage Server permission to add rules.');
    }
    const content = args.slice(1).join(' ');
    if (!content) return message.reply('Please provide the rule content.');
    
    await (prisma as any).rule.create({
      data: { guildId: message.guild.id, content }
    });
    return message.reply('Rule added successfully.');
  } 
  
  if (sub === 'remove') {
    if (!message.member?.permissions.has('ManageGuild') && message.author.id !== message.guild.ownerId) {
      return message.reply('You need Manage Server permission to remove rules.');
    }
    const index = parseInt(args[1]);
    if (isNaN(index) || index < 1) return message.reply('Please provide a valid rule number.');

    const rules = await (prisma as any).rule.findMany({ where: { guildId: message.guild.id }, orderBy: { id: 'asc' } });
    if (index > rules.length) return message.reply('Rule number not found.');

    const ruleToDelete = rules[index - 1];
    await (prisma as any).rule.delete({ where: { id: ruleToDelete.id } });
    return message.reply(`Rule ${index} removed.`);
  }

  // list rules
  const rules = await (prisma as any).rule.findMany({ where: { guildId: message.guild.id }, orderBy: { id: 'asc' } });
  if (rules.length === 0) return message.reply('No rules have been set for this server.');

  const embed = new EmbedBuilder()
    .setColor('#5865F2')
    .setTitle('SERVER RULES')
    .setDescription(rules.map((r: any, i: number) => `**${i + 1}.** ${r.content}`).join('\n'));

  return message.reply({ embeds: [embed] });
}
