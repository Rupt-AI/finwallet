type MetricType = "counter" | "histogram" | "gauge";

interface Metric {
  name: string;
  type: MetricType;
  value: number;
  labels?: Record<string, string>;
}

class MetricsRegistry {
  private metrics: Metric[] = [];

  register(metric: Metric) {
    this.metrics.push(metric);
  }

  increment(name: string, labels?: Record<string, string>) {
    const metric = this.metrics.find((m) => m.name === name);
    if (metric) metric.value += 1;
  }

  set(name: string, value: number) {
    const metric = this.metrics.find((m) => m.name === name);
    if (metric) metric.value = value;
  }

  getAll() {
    return this.metrics;
  }
}

export const metricsRegistry = new MetricsRegistry();