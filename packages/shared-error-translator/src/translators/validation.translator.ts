import { TranslatedError } from "../types/translated-error";

export function translateValidationError(): TranslatedError {
  return {
    code: "ERR_VALIDATION",
    message: "Validation failed",
    statusCode: 422,
    retryable: false,
    severity: "low",
  };
}