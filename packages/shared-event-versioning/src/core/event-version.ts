export interface VersionedEvent<T> {
  eventId: string;
  eventType: string;
  version: number;
  timestamp: string;
  service: string;
  payload: T;
}