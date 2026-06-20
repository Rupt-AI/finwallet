export interface TranslatedError {
  code: string;
  message: string;
  statusCode: number;
  retryable: boolean;
  severity: "low" | "medium" | "high" | "critical";
}