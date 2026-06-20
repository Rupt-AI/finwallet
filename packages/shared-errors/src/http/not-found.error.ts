import { BaseError } from "../base/base.error";

export class NotFoundError extends BaseError {
  constructor(message = "Resource Not Found") {
    super({
      message,
      statusCode: 404,
      code: "NOT_FOUND",
    });
  }
}