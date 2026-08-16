import { PrismaClient } from '../client';

const globalForPrisma = global as unknown as { prisma: any };

const createPrismaClient = () => {
  const client = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

  return client.$extends({
    query: {
      $allModels: {
        async $allOperations({ model, operation, args, query }) {
          const start = performance.now();
          const result = await query(args);
          const end = performance.now();
          const time = end - start;
          
          if (process.env.INSTRUMENT_DB === 'true') {
            console.log(`[DB INSTRUMENT] ${model}.${operation} took ${time.toFixed(2)}ms`);
          }
          
          return result;
        },
      },
    },
  });
};

export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export * from '../client';
