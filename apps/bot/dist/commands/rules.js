"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rulesCommand = void 0;
const discord_js_1 = require("discord.js");
const rulesService_1 = require("../services/rulesService");
exports.rulesCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('rules')
        .setDescription('Manage server rules')
        .addSubcommand(subcommand => subcommand.setName('list').setDescription('List all server rules'))
        .addSubcommand(subcommand => subcommand.setName('add')
        .setDescription('Add a new rule')
        .addStringOption(opt => opt.setName('rule').setDescription('The rule text').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('remove')
        .setDescription('Remove a rule')
        .addIntegerOption(opt => opt.setName('number').setDescription('The rule number').setRequired(true))),
    async execute(interaction) {
        if (!interaction.guild || !interaction.member)
            return;
        const subcommand = interaction.options.getSubcommand(true);
        const member = interaction.member;
        await interaction.deferReply();
        try {
            if (subcommand === 'list') {
                const res = await rulesService_1.rulesService.listRules(interaction.guild);
                return res.success ? interaction.editReply({ embeds: [res.embed] }) : interaction.editReply({ content: res.error });
            }
            else if (subcommand === 'add') {
                const rule = interaction.options.getString('rule', true);
                const res = await rulesService_1.rulesService.addRule(interaction.guild, member, rule);
                return interaction.editReply({ content: res.success ? res.message : res.error });
            }
            else if (subcommand === 'remove') {
                const number = interaction.options.getInteger('number', true);
                const res = await rulesService_1.rulesService.removeRule(interaction.guild, member, number);
                return interaction.editReply({ content: res.success ? res.message : res.error });
            }
        }
        catch (error) {
            console.error(error);
            const content = error.message || 'There was an error while executing the rules command.';
            await interaction.editReply({ content });
        }
    }
};
