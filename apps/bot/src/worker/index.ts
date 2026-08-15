import { PgBoss } from 'pg-boss';

export const boss = new PgBoss({
  connectionString: process.env.DATABASE_URL as string
});

boss.on('error', (error: Error) => console.error('pg-boss error:', error));

export async function startWorker() {
  await boss.start();
  console.log('[Niko] pg-boss worker started successfully on PostgreSQL');
}
