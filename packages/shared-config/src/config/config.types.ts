export interface AppConfig {
  env: "development" | "staging" | "production";
  serviceName: string;
  port: number;

  database: {
    url: string;
  };

  jwt: {
    secret: string;
    expiresIn: string;
  };

  kafka: {
    broker: string;
    clientId: string;
  };

  logging: {
    level: "debug" | "info" | "warn" | "error";
  };
}