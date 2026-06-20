import { BaseError } from "../base/base.error";

export class PaymentError extends BaseError {
  constructor(message = "Payment Processing Failed") {
    super({
      message,
      statusCode: 402,
      code: "PAYMENT_ERROR",
    });
  }
}