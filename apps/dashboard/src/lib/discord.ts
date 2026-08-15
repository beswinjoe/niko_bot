export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  global_name: string;
}

export interface DiscordGuild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
  approximate_member_count?: number;
}

export const DISCORD_API_ENDPOINT = 'https://discord.com/api/v10';

export async function getDiscordToken(code: string) {
  const data = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID!,
    client_secret: process.env.DISCORD_CLIENT_SECRET!,
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.DISCORD_REDIRECT_URI!,
  });

  const response = await fetch(`${DISCORD_API_ENDPOINT}/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Discord token');
  }

  return response.json();
}

export async function getDiscordUser(accessToken: string): Promise<DiscordUser> {
  const response = await fetch(`${DISCORD_API_ENDPOINT}/users/@me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Discord user');
  }

  return response.json();
}

export async function getDiscordUserGuilds(accessToken: string): Promise<DiscordGuild[]> {
  const response = await fetch(`${DISCORD_API_ENDPOINT}/users/@me/guilds`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user guilds');
  }

  return response.json();
}

export async function getDiscordBotGuild(guildId: string): Promise<DiscordGuild | null> {
  // Using bot token to check if bot is in a specific guild and get member count
  // Wait, we need a bot token for this. We can rely on the database `Guild` model instead.
  // The user says "The server must determine whether the user has sufficient permissions... If Niko is not installed in a guild: Show 'Niko isn't installed yet'".
  // We can query our database for this.
  return null; 
}

export function hasManageGuildPermission(permissions: string) {
  const MANAGE_GUILD = BigInt("0x20");
  const admin = BigInt("0x8");
  const permBigInt = BigInt(permissions);
  return (permBigInt & MANAGE_GUILD) === MANAGE_GUILD || (permBigInt & admin) === admin;
}

export function getAvatarUrl(userId: string, avatarHash: string | null) {
  if (!avatarHash) {
    // Default avatar based on user ID calculation
    const defaultIndex = BigInt(userId) >> BigInt("22");
    return `https://cdn.discordapp.com/embed/avatars/${Number(defaultIndex) % 6}.png`;
  }
  return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png`;
}

export function getGuildIconUrl(guildId: string, iconHash?: string | null) {
  if (!iconHash) {
    return null;
  }
  return `https://cdn.discordapp.com/icons/${guildId}/${iconHash}.png`;
}
