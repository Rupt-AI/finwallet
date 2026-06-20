import { BaseError } from "../base/base.error";

export class InternalServerError extends BaseError {
  constructor(message = "Internal Server Error") {
    super({
      message,
      statusCode: 500,
      code: "INTERNAL_SERVER_ERROR",
      isOperational: false,
    });
  }
}