import { TranslatedError } from "../types/translated-error";

export function translateGenericError(): TranslatedError {
  return {
    code: "ERR_INTERNAL",
    message: "Internal server error",
    statusCode: 500,
    retryable: false,
    severity: "medium",
  };
}