import { z } from "zod";

export const createWalletSchema = z.object({
  userId: z.string().uuid(),
  currency: z.enum(["NGN", "USD"]),
});

export const creditWalletSchema = z.object({
  walletId: z.string().uuid(),
  amount: z.number().positive(),
});

export const debitWalletSchema = z.object({
  walletId: z.string().uuid(),
  amount: z.number().positive(),
});