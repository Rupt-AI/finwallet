export type LogLevel =
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal";

export interface LogMeta {
  service: string;
  correlationId?: string;
  userId?: string;
  requestId?: string;
  path?: string;
  method?: string;
  statusCode?: number;
 [key: string]: unknown;
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  meta?: LogMeta;
}