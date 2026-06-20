import { Request, Response, NextFunction } from "express";
import { Logger } from "../logger/logger";
import { randomUUID } from "node:crypto";

const logger = new Logger("API-GATEWAY");

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const incoming = req.headers["x-correlation-id"];

  const correlationId =
    typeof incoming === "string"
      ? incoming
      : randomUUID();

  req.headers["x-correlation-id"] = correlationId;

  logger.info("Incoming Request", {
    service: "API-GATEWAY",
    correlationId,
    method: req.method,
    path: req.path
  });

  res.on("finish", () => {
    logger.info("Request Completed", {
      service: "API-GATEWAY",
      correlationId,
      method: req.method,
      path: req.path,
      statusCode: res.statusCode
    });
  });

  next();
}