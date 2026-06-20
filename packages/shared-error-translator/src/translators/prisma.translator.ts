import { TranslatedError } from "../types/translated-error";

export function translatePrismaError(): TranslatedError {
  return {
    code: "ERR_DATABASE",
    message: "Database operation failed",
    statusCode: 500,
    retryable: true,
    severity: "critical",
  };
}