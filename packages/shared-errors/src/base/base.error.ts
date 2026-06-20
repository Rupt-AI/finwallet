export abstract class BaseError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly isOperational: boolean;
  public readonly timestamp: string;

  constructor(params: {
    message: string;
    statusCode: number;
    code: string;
    isOperational?: boolean;
  }) {
    super(params.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.statusCode = params.statusCode;
    this.code = params.code;
    this.isOperational = params.isOperational ?? true;
    this.timestamp = new Date().toISOString();

    // ✅ FIX: TypeScript-safe captureStackTrace
    if (typeof (Error as any).captureStackTrace === "function") {
      (Error as any).captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      code: this.code,
      isOperational: this.isOperational,
      timestamp: this.timestamp
    };
  }
}