import { sanitizeObject } from "../sanitizer/object.sanitizer";

export class SecureLogger {
  private service: string;

  constructor(service: string) {
    this.service = service;
  }

  info(message: string, meta?: any) {
    console.log(JSON.stringify({
      level: "info",
      service: this.service,
      message,
      meta: sanitizeObject(meta),
      timestamp: new Date().toISOString(),
    }));
  }

  error(message: string, meta?: any) {
    console.error(JSON.stringify({
      level: "error",
      service: this.service,
      message,
      meta: sanitizeObject(meta),
      timestamp: new Date().toISOString(),
    }));
  }
}