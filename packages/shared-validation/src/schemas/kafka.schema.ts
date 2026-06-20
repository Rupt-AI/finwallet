import { z } from "zod";

export const kafkaEventSchema = z.object({
  eventId: z.string().uuid(),
  eventType: z.string(),
  timestamp: z.string(),
  service: z.string(),
  version: z.number(),
  payload: z.any(),
});