import winston from "winston";
import { LogMeta, LogLevel } from "../types/logger.types";

const format = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

export class Logger {
  private logger: winston.Logger;
  private service: string;

  constructor(service: string) {
    this.service = service;

    this.logger = winston.createLogger({
      level: "info",
      format,
      transports: [new winston.transports.Console()]
    });
  }

  private log(level: LogLevel, message: string, meta?: LogMeta) {
    this.logger.log({
      level,
      message,
      timestamp: new Date().toISOString(),
      meta: {
        service: this.service,
        ...meta
      }
    });
  }

  debug(message: string, meta?: LogMeta) {
    this.log("debug", message, meta);
  }

  info(message: string, meta?: LogMeta) {
    this.log("info", message, meta);
  }

  warn(message: string, meta?: LogMeta) {
    this.log("warn", message, meta);
  }

  error(message: string, meta?: LogMeta) {
    this.log("error", message, meta);
  }

  fatal(message: string, meta?: LogMeta) {
    this.log("fatal", message, meta);
  }
}