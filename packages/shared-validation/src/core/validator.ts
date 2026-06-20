import { ZodSchema } from "zod";

export class Validator {
  static validate<T>(schema: ZodSchema<T>, data: unknown): T {
    const result = schema.safeParse(data);

    if (!result.success) {
      throw {
        message: "Validation Error",
        errors: result.error.format(),
        statusCode: 422,
      };
    }

    return result.data;
  }
}