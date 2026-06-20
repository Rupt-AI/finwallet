import { createHistogram } from "../metrics/histogram";
import { ContextManager } from "@finwallet/shared-context";

const requestDuration = createHistogram("http_request_duration_ms");

export function trackRequest(fn: () => void) {
  const start = Date.now();

  fn();

  const duration = Date.now() - start;

  const context = ContextManager.get();

  requestDuration.observe(duration);

  return {
    duration,
    correlationId: context?.correlationId,
  };
}