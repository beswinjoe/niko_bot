import { prisma } from "@niko/db";



export async function logDashboardAction(params: {
  guildId: string;
  actorUserId: string;
  action: string;
  targetType?: string;
  targetId?: string;
  metadata?: Record<string, unknown>;
}) {
  try {
    await prisma.dashboardAuditLog.create({
      data: {
        guildId: params.guildId,
        actorUserId: params.actorUserId,
        action: params.action,
        targetType: params.targetType,
        targetId: params.targetId,
        metadata: params.metadata ? JSON.parse(JSON.stringify(params.metadata)) : undefined,
      }
    });
  } catch (err) {
    // Fire and forget; do not fail the main request if audit fails
    console.error('Failed to write dashboard audit log:', err);
  }
}
