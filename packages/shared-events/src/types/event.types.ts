export interface BaseEvent<T> {
  eventId: string;
  eventType: string;
  timestamp: string;
  service: string;
  version: number;
  payload: T;
}