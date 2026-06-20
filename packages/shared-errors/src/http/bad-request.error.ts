import { BaseError } from "../base/base.error";

export class BadRequestError extends BaseError {
  constructor(message = "Bad Request") {
    super({
      message,
      statusCode: 400,
      code: "BAD_REQUEST",
    });
  }
}