import { metricsRegistry } from "../core/metrics.registry";

export function createCounter(name: string) {
  metricsRegistry.register({
    name,
    type: "counter",
    value: 0,
  });

  return {
    inc: () => metricsRegistry.increment(name),
  };
}