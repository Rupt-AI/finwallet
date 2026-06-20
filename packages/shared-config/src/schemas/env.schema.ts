import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "staging", "production"]),

  SERVICE_NAME: z.string().min(1),

  PORT: z.coerce.number().default(3000),

  DATABASE_URL: z.string().url(),

  JWT_SECRET: z.string().min(20),

  JWT_EXPIRES_IN: z.string().default("1h"),

  KAFKA_BROKER: z.string().min(1),

  KAFKA_CLIENT_ID: z.string().min(1),

  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
});

export type EnvConfig = z.infer<typeof envSchema>;