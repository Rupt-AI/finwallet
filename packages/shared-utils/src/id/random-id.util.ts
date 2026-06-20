import { randomUUID } from "node:crypto";

export function generateRandomId(prefix = ""): string {
  const id = randomUUID().replace(/-/g, "").slice(0, 12);
  const timestamp = Date.now().toString(36);

  return `${prefix}${timestamp}-${id}`;
}