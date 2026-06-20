const registeredServices: string[] = [];

export function registerService(name: string) {
  if (!registeredServices.includes(name)) {
    registeredServices.push(name);
  }
}

export function getServices() {
  return registeredServices;
}