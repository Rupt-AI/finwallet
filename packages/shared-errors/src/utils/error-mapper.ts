import { BaseError } from "../base/base.error";

export function mapError(error: unknown) {
  if (error instanceof BaseError) {
    return error.toJSON();
  }

  return {
    message: "Unknown Error",
    statusCode: 500,
    code: "UNKNOWN_ERROR",
    isOperational: false,
    timestamp: new Date().toISOString(),
  };
}