import { envSchema } from "../schemas/env.schema";
import { AppConfig } from "./config.types";

export function loadConfig(): AppConfig {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error("❌ Invalid environment configuration:");
    console.error(parsed.error.format());
    process.exit(1);
  }

  const env = parsed.data;

  return {
    env: env.NODE_ENV,
    serviceName: env.SERVICE_NAME,
    port: env.PORT,

    database: {
      url: env.DATABASE_URL,
    },

    jwt: {
      secret: env.JWT_SECRET,
      expiresIn: env.JWT_EXPIRES_IN,
    },

    kafka: {
      broker: env.KAFKA_BROKER,
      clientId: env.KAFKA_CLIENT_ID,
    },

    logging: {
      level: env.LOG_LEVEL,
    },
  };
}