export function resolveEventVersion(
  event: any
): number {
  if (!event.version) return 1;
  return event.version;
}