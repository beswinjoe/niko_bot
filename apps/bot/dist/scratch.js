"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("@niko/db");
const prisma = new db_1.PrismaClient({
    datasources: {
        db: {
            url: "postgresql://postgres:Beswinjo%4070@db.ipkkqpdxifhyqbjfzwrq.supabase.co:5432/postgres"
        }
    }
});
prisma.$connect().then(() => console.log('Connected!')).catch(console.error);
