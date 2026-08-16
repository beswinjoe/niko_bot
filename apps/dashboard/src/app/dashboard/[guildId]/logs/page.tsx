import { authorizeGuildAction } from '@/lib/auth';
import { prisma } from "@niko/db";
import LogsClient from './LogsClient';



export default async function AuditLogsPage({ params }: { params: Promise<{ guildId: string }> }) {
  const { guildId } = await params;
  
  // Authorize the user (will throw Error/redirect if unauthorized)
  await authorizeGuildAction(guildId);

  // Fetch audit logs with the user details
  const logs = await prisma.dashboardAuditLog.findMany({
    where: { guildId },
    orderBy: { createdAt: 'desc' },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          avatar: true,
          globalName: true
        }
      }
    }
  });

  const serializedLogs = logs;

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-3xl font-extrabold text-white mb-2">Audit Logs</h1>
      <p className="text-neutral-400 mb-8">View configuration changes made by dashboard administrators.</p>
      
      <LogsClient 
        initialLogs={serializedLogs.map((log: any) => ({
          ...log, createdAt: log.createdAt.toISOString() }))} />
    </div>
  );
}
