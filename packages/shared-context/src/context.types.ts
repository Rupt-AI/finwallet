export interface RequestContext {
  correlationId: string;
  requestId?: string;
  userId?: string;
  service: string;
}