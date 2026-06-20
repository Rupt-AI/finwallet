import { Request, Response, NextFunction } from "express";
import { ContextManager } from "./async-context";
import { randomUUID } from "crypto";

export function contextMiddleware(req: Request, res: Response, next: NextFunction) {
  const context = {
    correlationId: (req.headers["x-correlation-id"] as string) || randomUUID(),
    requestId: randomUUID(),
    userId: undefined,
    service: "api-gateway"
  };

  ContextManager.run(context, () => {
    res.setHeader("x-correlation-id", context.correlationId);
    next();
  });
}