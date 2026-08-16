import { EmbedBuilder } from 'discord.js';

export class HelpService {
  public getHelp(prefix: string = '$') {
    const embed = new EmbedBuilder()
      .setColor('#5865F2')
      .setTitle('NIKO HELP')
      .setDescription(`Your server prefix is \`${prefix}\`\nNiko supports both **prefix** and **slash** commands.`)
      .addFields(
        {
          name: 'PREFIX COMMANDS',
          value: [
            `\`${prefix}warn @user <reason>\``,
            `\`${prefix}mute @user <duration> <reason>\``,
            `\`${prefix}kick @user <reason>\``,
            `\`${prefix}ban @user [duration] <reason>\``,
            `\`${prefix}unban <userId> <reason>\``,
            `\`${prefix}purge <amount>\``,
            `\`${prefix}cases [@user]\``,
            `\`${prefix}rules\``,
            `\`${prefix}rules add <rule>\``,
            `\`${prefix}rules remove <number>\``,
            `\`${prefix}afk [reason]\``,
            `\`${prefix}afk status\``,
            `\`${prefix}afk remove\``,
            `\`${prefix}permissions list\``,
            `\`${prefix}permissions add @Role <command>\``,
            `\`${prefix}permissions remove @Role <command>\``,
            `\`${prefix}muterole\``,
            `\`${prefix}muterole @Role\``,
            `\`${prefix}muterole create [name]\``,
            `\`${prefix}muterole remove\``,
            `\`${prefix}why @user\``,
            `\`${prefix}history @user\``,
            `\`${prefix}recommend\``
          ].join('\n'),
          inline: true
        },
        {
          name: 'SLASH COMMANDS',
          value: [
            `\`/moderation warn\``,
            `\`/moderation mute\``,
            `\`/moderation kick\``,
            `\`/moderation ban\``,
            `\`/moderation unban\``,
            `\`/moderation purge\``,
            `\`/moderation cases\``,
            `\`/rules list\``,
            `\`/rules add\``,
            `\`/rules remove\``,
            `\`/afk set\``,
            `\`/afk status\``,
            `\`/afk remove\``,
            `\`/permissions list\``,
            `\`/permissions add\``,
            `\`/permissions remove\``,
            `\`/muterole status\``,
            `\`/muterole set\``,
            `\`/muterole create\``,
            `\`/muterole remove\``,
            `\`/niko help\``,
            `\`/niko why\``,
            `\`/niko history\``,
            `\`/niko recommend\``
          ].join('\n'),
          inline: true
        }
      );

    return { success: true, embed };
  }
}

export const helpService = new HelpService();
