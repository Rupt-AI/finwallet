import { BaseError } from "../base/base.error";

export class ForbiddenError extends BaseError {
  constructor(message = "Forbidden") {
    super({
      message,
      statusCode: 403,
      code: "FORBIDDEN",
    });
  }
}