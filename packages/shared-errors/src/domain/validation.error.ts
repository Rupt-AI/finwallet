import { BaseError } from "../base/base.error";

export class ValidationError extends BaseError {
  constructor(message = "Validation Failed") {
    super({
      message,
      statusCode: 422,
      code: "VALIDATION_ERROR",
    });
  }
}