import { BaseError } from "../base/base.error";

export class AuthError extends BaseError {
  constructor(message = "Authentication Error") {
    super({
      message,
      statusCode: 401,
      code: "AUTH_ERROR",
    });
  }
}