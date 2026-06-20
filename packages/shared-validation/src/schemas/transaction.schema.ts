import { z } from "zod";

export const createTransactionSchema = z.object({
  fromWalletId: z.string().uuid(),
  toWalletId: z.string().uuid(),
  amount: z.number().positive(),
  reference: z.string().min(6),
});