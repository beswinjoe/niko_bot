import { PgBoss } from 'pg-boss';

export const boss = new PgBoss({
  connectionString: process.env.DIRECT_URL as string,
  maintenanceIntervalSeconds: 600,
  schedule: false,
  queueCacheIntervalSeconds: 600,
  superviseIntervalSeconds: 600,
  // Pass keepAlive config for the underlying pg-pool to prevent Supabase idle timeouts
  keepAlive: true,
  keepAliveInitialDelayMillis: 10000,
});

boss.on('error', (error: Error) => console.error('pg-boss error:', error));

export async function startWorker() {
  await boss.start();
  console.log('[Niko] pg-boss worker started successfully on PostgreSQL');
}
