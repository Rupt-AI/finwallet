type EventKey = string;

interface VersionMap {
  [version: number]: string;
}

class EventVersionRegistry {
  private registry: Record<EventKey, VersionMap> = {};

  register(eventKey: string, version: number, schema: string) {
    if (!this.registry[eventKey]) {
      this.registry[eventKey] = {};
    }

    this.registry[eventKey][version] = schema;
  }

  get(eventKey: string, version: number) {
    return this.registry[eventKey]?.[version];
  }

  getLatest(eventKey: string) {
    const versions = this.registry[eventKey];
    if (!versions) return null;

    const latestVersion = Math.max(...Object.keys(versions).map(Number));
    return versions[latestVersion];
  }
}

export const eventVersionRegistry = new EventVersionRegistry();