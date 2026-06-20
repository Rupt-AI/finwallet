import { TranslatedError } from "../types/translated-error";

export function translateKafkaError(): TranslatedError {
  return {
    code: "ERR_KAFKA",
    message: "Kafka operation failed",
    statusCode: 503,
    retryable: true,
    severity: "high",
  };
}