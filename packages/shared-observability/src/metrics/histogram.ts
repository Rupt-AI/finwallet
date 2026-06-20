import { metricsRegistry } from "../core/metrics.registry";

export function createHistogram(name: string) {
  metricsRegistry.register({
    name,
    type: "histogram",
    value: 0,
  });

  return {
    observe: (value: number) => metricsRegistry.set(name, value),
  };
}