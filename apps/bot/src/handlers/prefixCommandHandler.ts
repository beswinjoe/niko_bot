import { Message, EmbedBuilder } from 'discord.js';
import { prisma } from '@niko/db';
import { moderationService, ModerationAction } from '../services/moderationService';
import { rulesService } from '../services/rulesService';
import { afkService } from '../services/afkService';
import { permissionsService } from '../services/permissionsService';
import { helpService } from '../services/helpService';
import { muteroleService } from '../services/muteroleService';
import { intelligence } from '../services/intelligence';
import { parseDuration } from '../utils/duration';
import { cache } from '../cache/CacheManager';

export async function handlePrefixCommand(message: Message) {
  if (!message.guild || !message.member || !message.client.user || message.author.bot) return;

  const settings = await cache.getGuildSettings(message.guild.id);
  const prefix = settings?.prefix || '$';

  // AFK check & mentions handling
  await afkService.handleMessage(message, prefix);

  if (!message.content.startsWith(prefix)) return;

  // Parse arguments handling quoted strings
  const args = message.content.slice(prefix.length).trim().match(/(?:[^\s"]+|"[^"]*")+/g)?.map(a => a.replace(/"/g, '')) || [];
  const command = args.shift()?.toLowerCase();

  if (!command) return;

  if (command === 'help') {
    const res = helpService.getHelp(prefix);
    return message.reply({ embeds: [res.embed!] });
  }

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
    cache.invalidateGuildSettings(message.guild.id);
    return message.reply(`Prefix updated to \`${newPrefix}\``);
  }

  if (command === 'rules') {
    const sub = args[0]?.toLowerCase();
    if (sub === 'add') {
      const content = args.slice(1).join(' ');
      const res = await rulesService.addRule(message.guild, message.member, content);
      return message.reply(res.success ? res.message! : res.error!);
    } else if (sub === 'remove') {
      const index = parseInt(args[1]);
      const res = await rulesService.removeRule(message.guild, message.member, index);
      return message.reply(res.success ? res.message! : res.error!);
    } else {
      const res = await rulesService.listRules(message.guild);
      return res.success ? message.reply({ embeds: [res.embed!] }) : message.reply(res.error!);
    }
  }

  if (command === 'afk') {
    const sub = args[0]?.toLowerCase();
    if (sub === 'remove') {
      const res = await afkService.removeAfk(message.author.id);
      return message.reply(res.success ? res.message! : res.error!);
    } else if (sub === 'status') {
      const res = await afkService.getStatus(message.author.id);
      return message.reply(res.success ? res.message! : res.error!);
    } else {
      const reason = args.join(' ') || 'AFK';
      const res = await afkService.setAfk(message.author.id, reason);
      return message.reply(res.message!);
    }
  }

  if (command === 'permissions') {
    const sub = args[0]?.toLowerCase();
    if (sub === 'add' || sub === 'remove') {
      const roleArg = args[1];
      const roleId = roleArg?.match(/^<@&(\d+)>$/)?.[1] || roleArg;
      const cmdName = args[2]?.toLowerCase();
      
      const res = sub === 'add' 
        ? await permissionsService.addPermission(message.guild, message.member, roleId, cmdName)
        : await permissionsService.removePermission(message.guild, message.member, roleId, cmdName);
      return message.reply(res.success ? res.message! : res.error!);
    } else if (sub === 'list' || !sub) {
      const res = await permissionsService.listPermissions(message.guild);
      return message.reply(res.success ? { content: res.message!, allowedMentions: { parse: [] } } : res.error!);
    }
  }

  if (command === 'muterole') {
    const sub = args[0]?.toLowerCase();
    if (sub === 'create') {
      const name = args.slice(1).join(' ') || 'Muted';
      const res = await muteroleService.createMuteRole(message.guild, message.member, name);
      return message.reply(res.success ? res.message! : res.error!);
    } else if (sub === 'remove') {
      const res = await muteroleService.removeMuteRole(message.guild, message.member);
      return message.reply(res.success ? res.message! : res.error!);
    } else if (args[0]) {
      const roleId = args[0].match(/^<@&(\d+)>$/)?.[1] || args[0];
      const res = await muteroleService.setMuteRole(message.guild, message.member, roleId);
      return message.reply(res.success ? res.message! : res.error!);
    } else {
      const res = await muteroleService.getMuteRole(message.guild, prefix);
      return message.reply(res.success ? res.message! : res.error!);
    }
  }

  if (command === 'why' || command === 'history') {
    const targetArg = args[0];
    if (!targetArg) return message.reply('Please provide a user.');
    const targetIdMatch = targetArg.match(/^<@!?(\d+)>$/);
    const targetId = targetIdMatch ? targetIdMatch[1] : targetArg;
    
    if (command === 'why') {
      const res = await intelligence.getWhyContext(message.guild.id, targetId);
      return res.success ? message.reply({ embeds: [res.embed!] }) : message.reply(res.error!);
    } else {
      const res = await intelligence.getHistory(message.guild.id, targetId);
      return res.success ? message.reply({ embeds: [res.embed!] }) : message.reply(res.error!);
    }
  }

  if (command === 'recommend') {
    const res = await intelligence.getRecommendation(message.guild.id);
    return message.reply({ embeds: [res.embed!] });
  }

  if (command === 'dmad') {
    const { dmadCommand } = await import('../commands/general/dmad');
    await dmadCommand.executePrefix(message, args);
    // Don't trigger promotion check for the opt-in/opt-out command itself
    return;
  }

  // Moderation commands
  const validModCommands = ['warn', 'mute', 'tempmute', 'kick', 'ban', 'tempban', 'unban', 'purge', 'cases'];
  let commandExecuted = false;

  if (validModCommands.includes(command)) {
    if (command === 'purge') {
       const amount = parseInt(args[0]);
       const res = await moderationService.purge(message.client, message.guild, message.member, message.channel, amount);
       if (res.success && res.embed) {
         const m = await message.reply({ embeds: [res.embed] });
         setTimeout(() => m.delete().catch(() => {}), 3000);
         commandExecuted = true;
       } else {
         return message.reply(res.error!);
       }
    } else if (command === 'cases') {
      const filterUserId = args[0] ? args[0].match(/^<@!?(\d+)>$/)?.[1] || args[0] : undefined;
      const res = await moderationService.getCases(message.guild, filterUserId);
      if (res.success) {
        await message.reply({ embeds: [res.embed!] });
        commandExecuted = true;
      } else {
        await message.reply(res.error!);
      }
    } else {
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
         const reason = args.join(' ') || 'No reason provided';
         const res = await moderationService.unban(message.client, message.guild, message.member, targetId, reason);
         if (res.success) {
           await message.reply({ embeds: [res.embed!] });
           commandExecuted = true;
         } else {
           await message.reply(res.error!);
         }
      } else {
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

        if (action) {
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
            await message.reply({ content: result.error });
          } else if (result.embed) {
            await message.reply({ embeds: [result.embed] });
            commandExecuted = true;
          }
        }
      }
    }
  } else {
    // Other commands that executed successfully (help, etc. above)
    // Actually, we've already returned for those early in the function.
    // Wait, the previous commands returned early. We should probably only trigger DM for commands handled here.
    // To handle early returns, we should trigger it in the commands themselves, or we just rely on mod commands triggering it for now since most activity is mod commands.
    // Better yet, just import it at the top and trigger it asynchronously anywhere.
  }

  // Trigger DM promotion evaluation non-blockingly
  if (commandExecuted) {
    const { dmPromotionService } = await import('../services/dmPromotionService');
    dmPromotionService.triggerPromotionCheck(message).catch(console.error);
  }
}
