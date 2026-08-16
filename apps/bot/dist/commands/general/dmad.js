"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dmadCommand = void 0;
const discord_js_1 = require("discord.js");
const dmPromotionService_1 = require("../../services/dmPromotionService");
exports.dmadCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('dmad')
        .setDescription('Manage your direct message promotion preferences')
        .addSubcommand(subcommand => subcommand
        .setName('optout')
        .setDescription('Opt out of receiving server promotion recommendations in your DMs'))
        .addSubcommand(subcommand => subcommand
        .setName('optin')
        .setDescription('Opt back into receiving server promotion recommendations')),
    async execute(interaction) {
        // Check if interaction is command
        if (!interaction.isChatInputCommand())
            return;
        const subcommand = interaction.options.getSubcommand();
        if (subcommand === 'optout') {
            await dmPromotionService_1.dmPromotionService.optOut(interaction.user.id);
            return interaction.reply({
                content: '✅ You have successfully opted out of all future Niko DM promotions. We respect your inbox.',
                ephemeral: true
            });
        }
        if (subcommand === 'optin') {
            await dmPromotionService_1.dmPromotionService.optIn(interaction.user.id);
            return interaction.reply({
                content: '✅ You have opted back in to receive occasional community recommendations from Niko.',
                ephemeral: true
            });
        }
    },
    async executePrefix(message, args) {
        if (!args[0]) {
            return message.reply({ content: 'Usage: `$dmad optout` or `$dmad optin`' });
        }
        const action = args[0].toLowerCase();
        if (action === 'optout') {
            await dmPromotionService_1.dmPromotionService.optOut(message.author.id);
            return message.reply({
                content: '✅ You have successfully opted out of all future Niko DM promotions. We respect your inbox.'
            });
        }
        if (action === 'optin') {
            await dmPromotionService_1.dmPromotionService.optIn(message.author.id);
            return message.reply({
                content: '✅ You have opted back in to receive occasional community recommendations from Niko.'
            });
        }
        return message.reply({ content: 'Unknown action. Usage: `$dmad optout` or `$dmad optin`' });
    }
};
