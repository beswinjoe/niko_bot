import { PrismaClient } from '../client';
const globalForPrisma = global;
// Aggregator for operations
const operationStats = {};
let lastReportTime = Date.now();
const createPrismaClient = () => {
    const client = new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['warn'] : ['error'],
    });
    return client.$extends({
        query: {
            $allModels: {
                async $allOperations({ model, operation, args, query }) {
                    const result = await query(args);
                    if (process.env.INSTRUMENT_DB === 'true') {
                        const key = `${model}.${operation}`;
                        operationStats[key] = (operationStats[key] || 0) + 1;
                        const now = Date.now();
                        if (now - lastReportTime >= 10000) { // Every 10s
                            const appName = process.env.APP_NAME || 'UNKNOWN';
                            console.log(`\n[DB STATS] Process: ${appName} (PID: ${process.pid})`);
                            for (const [k, count] of Object.entries(operationStats)) {
                                console.log(`  ${k}: ${count} calls (~${(count / ((now - lastReportTime) / 60000)).toFixed(1)}/min)`);
                            }
                            lastReportTime = now;
                            // Reset stats if we want per-minute, or keep accumulating. We'll reset for clear per-minute views.
                            for (const k in operationStats)
                                delete operationStats[k];
                        }
                    }
                    return result;
                },
            },
        },
    });
};
export const prisma = globalForPrisma.prisma || createPrismaClient();
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = prisma;
export * from '../client';
