import { sanitizeObject } from "../sanitizer/object.sanitizer";

export function secureEvent(event: any) {
  return {
    ...event,
    payload: sanitizeObject(event.payload),
  };
}