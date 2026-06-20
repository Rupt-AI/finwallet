export async function retry<T>(
  fn: () => Promise<T>,
  attempts = 3,
  delayMs = 500
): Promise<T> {
  let lastError: unknown;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      await new Promise((resolve) =>
        setTimeout(resolve, delayMs * (i + 1))
      );
    }
  }

  throw lastError;
}