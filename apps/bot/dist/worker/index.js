"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boss = void 0;
exports.startWorker = startWorker;
const pg_boss_1 = require("pg-boss");
exports.boss = new pg_boss_1.PgBoss({
    connectionString: process.env.DIRECT_URL,
    maintenanceIntervalSeconds: 600,
    schedule: false,
    queueCacheIntervalSeconds: 600,
    superviseIntervalSeconds: 600,
    // Pass keepAlive config for the underlying pg-pool to prevent Supabase idle timeouts
    keepAlive: true,
    keepAliveInitialDelayMillis: 10000,
});
exports.boss.on('error', (error) => console.error('pg-boss error:', error));
async function startWorker() {
    await exports.boss.start();
    console.log('[Niko] pg-boss worker started successfully on PostgreSQL');
}
