"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const dns_1 = require("dns");
(0, dns_1.setDefaultResultOrder)('ipv4first');
const client_1 = require("./client");
const discord_js_1 = require("discord.js");
const sentinel_1 = require("./services/sentinel");
const intelligence_1 = require("./services/intelligence");
const worker_1 = require("./worker");
const db_1 = require("@niko/db");
const aiModeration_1 = require("./worker/aiModeration");
const unbanWorker_1 = require("./worker/unbanWorker");
const prefixCommandHandler_1 = require("./handlers/prefixCommandHandler");
// Import slash commands
const moderation_1 = require("./commands/moderation");
const rules_1 = require("./commands/rules");
const afk_1 = require("./commands/afk");
const permissions_1 = require("./commands/permissions");
const niko_1 = require("./commands/niko");
const muterole_1 = require("./commands/muterole");
async function bootstrap() {
    const token = process.env.DISCORD_TOKEN;
    if (!token) {
        throw new Error('DISCORD_TOKEN is not defined in the environment variables.');
    }
    // Load slash commands into collection
    const slashCommands = [
        moderation_1.moderationCommand,
        rules_1.rulesCommand,
        afk_1.afkCommand,
        permissions_1.permissionsCommand,
        niko_1.nikoCommand,
        muterole_1.muteroleCommand
    ];
    for (const cmd of slashCommands) {
        client_1.commands.set(cmd.data.name, cmd);
    }
    // Initialize background workers (pg-boss via PostgreSQL)
    await (0, worker_1.startWorker)();
    await (0, aiModeration_1.initAIModerationWorker)();
    await (0, unbanWorker_1.initUnbanWorker)();
    client_1.client.once(discord_js_1.Events.ClientReady, async (readyClient) => {
        console.log(`[Niko] Logged in as ${readyClient.user.tag}`);
        const rest = new discord_js_1.REST().setToken(token);
        try {
            console.log(`[Niko] Started refreshing application (/) commands.`);
            const body = slashCommands.map(c => c.data.toJSON());
            const devGuildId = process.env.DEV_GUILD_ID;
            if (process.env.NODE_ENV === 'development' && devGuildId) {
                await rest.put(discord_js_1.Routes.applicationGuildCommands(readyClient.user.id, devGuildId), { body });
                console.log(`[Niko] Successfully reloaded guild application (/) commands for guild ${devGuildId}.`);
            }
            else {
                await rest.put(discord_js_1.Routes.applicationCommands(readyClient.user.id), { body });
                console.log(`[Niko] Successfully reloaded global application (/) commands.`);
            }
        }
        catch (error) {
            console.error(error);
        }
    });
    client_1.client.on(discord_js_1.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isChatInputCommand())
            return;
        const command = client_1.commands.get(interaction.commandName);
        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }
        try {
            await command.execute(interaction);
        }
        catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
            }
            else {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    });
    client_1.client.on(discord_js_1.Events.GuildMemberAdd, async (member) => {
        await sentinel_1.sentinel.evaluateJoin(member);
    });
    client_1.client.on(discord_js_1.Events.GuildCreate, async (guild) => {
        console.log(`[Niko] Joined new guild: ${guild.name} (${guild.id})`);
        try {
            await db_1.prisma.guild.upsert({
                where: { id: guild.id },
                update: { name: guild.name, memberCount: guild.memberCount },
                create: {
                    id: guild.id,
                    name: guild.name,
                    memberCount: guild.memberCount,
                    settings: {
                        create: {}
                    }
                }
            });
        }
        catch (error) {
            console.error(`[GuildCreate Error] Failed to register guild ${guild.id}:`, error);
        }
    });
    client_1.client.on(discord_js_1.Events.GuildDelete, async (guild) => {
        console.log(`[Niko] Left guild: ${guild.name} (${guild.id})`);
        try {
            // Automatically disable public listing when Niko leaves the server
            await db_1.prisma.serverListing.updateMany({
                where: { guildId: guild.id },
                data: { isPublic: false }
            });
        }
        catch (error) {
            console.error(`[GuildDelete Error] Failed to handle leaving guild ${guild.id}:`, error);
        }
    });
    client_1.client.on(discord_js_1.Events.MessageCreate, async (message) => {
        if (message.author.bot)
            return;
        try {
            // Process prefix commands (includes AFK check/mention handling inside)
            await (0, prefixCommandHandler_1.handlePrefixCommand)(message);
            await sentinel_1.sentinel.evaluateMessage(message);
            if (message.guild) {
                // Enqueue AI moderation job to pg-boss (idempotent, retries enabled)
                await worker_1.boss.send('ai-moderation', {
                    messageId: message.id,
                    channelId: message.channel.id,
                    guildId: message.guild.id,
                    content: message.content,
                    authorId: message.author.id,
                    authorTag: message.author.tag,
                }, {
                    retryLimit: 3,
                    retryBackoff: true,
                    singletonKey: message.id
                });
                await intelligence_1.intelligence.trackMessageActivity(message.guild.id, message.channel.id);
            }
        }
        catch (error) {
            console.error('[MessageCreate Error]', error);
        }
    });
    await client_1.client.login(token);
}
bootstrap().catch(console.error);
