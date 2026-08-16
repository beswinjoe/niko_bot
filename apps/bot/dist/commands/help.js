"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHelpCommand = handleHelpCommand;
const discord_js_1 = require("discord.js");
async function handleHelpCommand(message, prefix) {
    const embed = new discord_js_1.EmbedBuilder()
        .setColor('#5865F2')
        .setTitle('NIKO HELP')
        .setDescription(`Here is the list of available commands. Your server prefix is \`${prefix}\``)
        .addFields({
        name: 'MODERATION',
        value: [
            `\`${prefix}warn @user <reason>\``,
            `\`${prefix}mute @user <duration> <reason>\``,
            `\`${prefix}kick @user <reason>\``,
            `\`${prefix}ban @user [duration] <reason>\``,
            `\`${prefix}unban <userId> <reason>\``,
            `\`${prefix}purge <amount>\``,
            `\`${prefix}cases [@user]\``
        ].join('\n')
    }, {
        name: 'UTILITY',
        value: [
            `\`${prefix}rules\` (View rules)`,
            `\`${prefix}rules add <rule>\``,
            `\`${prefix}rules remove <number>\``,
            `\`${prefix}afk [reason]\``,
            `\`${prefix}afk remove\``,
            `\`${prefix}afk status\``
        ].join('\n')
    }, {
        name: 'CONFIGURATION',
        value: [
            `\`${prefix}permissions list\``,
            `\`${prefix}permissions add @Role <command>\``,
            `\`${prefix}permissions remove @Role <command>\``,
            `\`${prefix}config prefix <new_prefix>\``
        ].join('\n')
    });
    return message.reply({ embeds: [embed] });
}
