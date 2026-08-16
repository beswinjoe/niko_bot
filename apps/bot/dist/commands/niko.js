"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nikoCommand = void 0;
const discord_js_1 = require("discord.js");
const helpService_1 = require("../services/helpService");
const intelligence_1 = require("../services/intelligence");
const db_1 = require("@niko/db");
exports.nikoCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('niko')
        .setDescription('Niko Intelligence and Utilities')
        .addSubcommand(subcommand => subcommand.setName('help').setDescription('Learn how to use Niko'))
        .addSubcommand(subcommand => subcommand.setName('why').setDescription('Get moderation context for a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to investigate').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('history').setDescription('View moderation history for a user')
        .addUserOption(opt => opt.setName('user').setDescription('User to investigate').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('recommend').setDescription('Get server security recommendations')),
    async execute(interaction) {
        if (!interaction.guild)
            return;
        const subcommand = interaction.options.getSubcommand(true);
        await interaction.deferReply();
        try {
            if (subcommand === 'help') {
                const settings = await db_1.prisma.guildSetting.findUnique({ where: { guildId: interaction.guild.id } });
                const prefix = settings?.prefix || '$';
                const res = helpService_1.helpService.getHelp(prefix);
                return interaction.editReply({ embeds: [res.embed] });
            }
            else if (subcommand === 'why') {
                const userId = interaction.options.getUser('user', true).id;
                const res = await intelligence_1.intelligence.getWhyContext(interaction.guild.id, userId);
                return res.success ? interaction.editReply({ embeds: [res.embed] }) : interaction.editReply({ content: res.error });
            }
            else if (subcommand === 'history') {
                const userId = interaction.options.getUser('user', true).id;
                const res = await intelligence_1.intelligence.getHistory(interaction.guild.id, userId);
                return res.success ? interaction.editReply({ embeds: [res.embed] }) : interaction.editReply({ content: res.error });
            }
            else if (subcommand === 'recommend') {
                const res = await intelligence_1.intelligence.getRecommendation(interaction.guild.id);
                return interaction.editReply({ embeds: [res.embed] });
            }
        }
        catch (error) {
            console.error(error);
            const content = 'There was an error while executing the niko command.';
            await interaction.editReply({ content });
        }
    }
};
