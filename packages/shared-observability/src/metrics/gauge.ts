import { metricsRegistry } from "../core/metrics.registry";

export function createGauge(name: string) {
  metricsRegistry.register({
    name,
    type: "gauge",
    value: 0,
  });

  return {
    set: (value: number) => metricsRegistry.set(name, value),
  };
}