import { HttpError } from "../core/http-error";

export function mapError(error: any) {
  if (error instanceof HttpError) {
    return {
      success: false,
      error: {
        code: error.code,
        message: error.message,
        statusCode: error.statusCode,
        timestamp: new Date().toISOString(),
      },
    };
  }

  return {
    success: false,
    error: {
      code: "ERR_INTERNAL_SERVER",
      message: "Internal Server Error",
      statusCode: 500,
      timestamp: new Date().toISOString(),
    },
  };
}