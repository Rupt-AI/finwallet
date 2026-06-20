import { BaseError } from "../base/base.error";

export class UnauthorizedError extends BaseError {
  constructor(message = "Unauthorized") {
    super({
      message,
      statusCode: 401,
      code: "UNAUTHORIZED",
    });
  }
}