import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(10),
  password: z.string().min(8),
});

export const updateUserSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().min(10).optional(),
});