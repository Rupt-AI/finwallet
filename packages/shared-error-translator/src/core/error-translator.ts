import { translateKafkaError } from "../translators/kafka.translator";
import { translatePrismaError } from "../translators/prisma.translator";
import { translateValidationError } from "../translators/validation.translator";
import { translateGenericError } from "../translators/generic.translator";

export function translateError(error: Error) {
  const name = error.name.toLowerCase();

  if (name.includes("zod")) {
    return translateValidationError();
  }

  if (name.includes("kafka")) {
    return translateKafkaError();
  }

  if (name.includes("prisma")) {
    return translatePrismaError();
  }

  return translateGenericError();
}