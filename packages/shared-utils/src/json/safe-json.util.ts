export function safeParse<T>(data: string): T | null {
  try {
    return JSON.parse(data) as T;
  } catch {
    return null;
  }
}

export function safeStringify(data: unknown): string {
  try {
    return JSON.stringify(data);
  } catch {
    return "{}";
  }
}