import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(5000),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  DATABASE_URL: z.string(),
  EMAIL_USER: z.string(),
  EMAIL_PASS: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables:",
    z.treeifyError(parsedEnv.error)
  );
  process.exit(1);
}

const envData = parsedEnv.data;

export const env = {
  port: envData.PORT,
  node_env: envData.NODE_ENV,
  database_url: envData.DATABASE_URL,
  email_user: envData.EMAIL_USER,
  email_pass: envData.EMAIL_PASS,
};