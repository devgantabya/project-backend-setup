import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { env } from "../app/config/env";

const connectionString = `${env.database_url}`;

const adapter = new PrismaPg({ connectionString });

export const prisma = new PrismaClient({
  adapter,
});