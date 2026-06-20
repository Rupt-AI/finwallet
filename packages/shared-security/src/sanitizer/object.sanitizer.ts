import { SENSITIVE_FIELDS } from "../constants/sensitive-fields";

export function sanitizeObject(obj: any): any {
  if (!obj || typeof obj !== "object") return obj;

  const cloned = Array.isArray(obj) ? [...obj] : { ...obj };

  for (const key in cloned) {
    if (SENSITIVE_FIELDS.includes(key.toLowerCase())) {
      cloned[key] = "***REDACTED***";
    } else if (typeof cloned[key] === "object") {
      cloned[key] = sanitizeObject(cloned[key]);
    }
  }

  return cloned;
}