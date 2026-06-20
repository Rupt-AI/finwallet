export interface BootstrapConfig {
  serviceName: string;
  port: number;
}

export interface BootstrapContext {
  config: any;
  logger: any;
  metrics: any;
}