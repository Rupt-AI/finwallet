import { loadConfig } from "@finwallet/shared-config";
import { Logger } from "@finwallet/shared-logger";
import { registerService } from "../registry/service.registry";

export class Bootstrap {
  static init(serviceName: string) {
    const config = loadConfig();

    const logger = new Logger(serviceName);

    registerService(serviceName);

    logger.info("Service Bootstrapped", {
      service: serviceName,
      port: config.port,
    });

    return {
      config,
      logger,
    };
  }
}