import { sanitizeObject } from "./object.sanitizer";

export function sanitizePII(data: any) {
  return sanitizeObject(data);
}