import { prisma } from '@niko/db';
import { Message, EmbedBuilder } from 'discord.js';

export class DMPromotionService {
  // A simple in-memory cache of active DM promotions to avoid DB hits on every command
  private activePromotions: any[] = [];
  private lastFetchedAt: number = 0;
  private readonly CACHE_TTL = 1000 * 60 * 5; // 5 minutes

  constructor() {
    this.refreshCache();
  }

  private async refreshCache() {
    try {
      this.activePromotions = await prisma.featuredPromotion.findMany({
        where: { 
          promotionType: 'DM_PROMOTION',
          status: 'ACTIVE',
          expiresAt: { gt: new Date() }
        },
        include: { guild: true }
      });
      this.lastFetchedAt = Date.now();
    } catch (error) {
      console.error('[DMPromotionService] Error refreshing cache:', error);
    }
  }

  private async getActivePromotions() {
    if (Date.now() - this.lastFetchedAt > this.CACHE_TTL) {
      await this.refreshCache();
    }
    return this.activePromotions;
  }

  /**
   * Safely called at the end of every successful command.
   * Runs asynchronously, never blocking the main event loop.
   */
  public async triggerPromotionCheck(message: Message) {
    try {
      const promotions = await this.getActivePromotions();
      
      if (promotions.length === 0) return;

      const randomPromotion = promotions[Math.floor(Math.random() * promotions.length)];

      const userPref = await prisma.userDMPromotion.findUnique({
        where: { userId: message.author.id }
      });

      // Opted out
      if (userPref?.optOut) return;

      // 7 day cooldown check
      const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
      if (userPref?.lastPromotionAt) {
        if (Date.now() - userPref.lastPromotionAt.getTime() < SEVEN_DAYS_MS) {
          return;
        }
      }

      const listing = await prisma.serverListing.findUnique({
        where: { guildId: randomPromotion.guildId }
      });
      const inviteUrl = listing?.inviteUrl || 'https://discord.gg/niko';

      // Send the DM
      const embed = new EmbedBuilder()
        .setColor('#7C3AED')
        .setTitle('Featured Community Recommendation')
        .setDescription(randomPromotion.promotionalMessage || `Check out **${randomPromotion.guild.name}**!`)
        .setFooter({ text: 'To opt out of recommendations, use $dmad optout in any server.' })
        .addFields({ name: 'Join Server', value: `[Click Here to Join](${inviteUrl})` });

      try {
        await message.author.send({ embeds: [embed] });

        // Update successful metrics
        await prisma.$transaction([
          prisma.userDMPromotion.upsert({
            where: { userId: message.author.id },
            update: { lastPromotionAt: new Date() },
            create: { userId: message.author.id, lastPromotionAt: new Date() }
          }),
          prisma.featuredPromotion.update({
            where: { id: randomPromotion.id },
            data: { dmSent: { increment: 1 } }
          })
        ]);
      } catch (dmError) {
        // Silently ignore closed DMs
      }

    } catch (error) {
      // Catch any unexpected DB errors and swallow them to protect the bot's stability
      console.error('[DMPromotionService] Trigger check error:', error);
    }
  }

  public async optOut(userId: string) {
    await prisma.userDMPromotion.upsert({
      where: { userId },
      update: { optOut: true },
      create: { userId, optOut: true }
    });
  }

  public async optIn(userId: string) {
    await prisma.userDMPromotion.upsert({
      where: { userId },
      update: { optOut: false },
      create: { userId, optOut: false }
    });
  }
}

export const dmPromotionService = new DMPromotionService();
