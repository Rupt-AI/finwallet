import { Request, Response, NextFunction } from "express";
import { mapError } from "../mapper/error.mapper";
import { ContextManager } from "@finwallet/shared-context";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const context = ContextManager.get();

  const mapped = mapError(err);

  res.status(mapped.error.statusCode).json({
    ...mapped,
    error: {
      ...mapped.error,
      correlationId: context?.correlationId,
    },
  });
}