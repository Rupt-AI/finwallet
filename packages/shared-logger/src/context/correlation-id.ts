import { randomUUID } from "crypto";

let correlationStore = new Map<string, string>();

export const CorrelationContext = {
  generate(): string {
    return randomUUID();
  },

  set(key: string, value: string) {
    correlationStore.set(key, value);
  },

  get(key: string): string | undefined {
    return correlationStore.get(key);
  },

  clear() {
    correlationStore.clear();
  }
};