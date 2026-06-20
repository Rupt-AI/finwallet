import { USER_EVENTS } from "../domains/user.events";
import { AUTH_EVENTS } from "../domains/auth.events";
import { WALLET_EVENTS } from "../domains/wallet.events";
import { TRANSACTION_EVENTS } from "../domains/transaction.events";

export const EVENT_REGISTRY = {
  ...USER_EVENTS,
  ...AUTH_EVENTS,
  ...WALLET_EVENTS,
  ...TRANSACTION_EVENTS,
} as const;

export type EventName =
  typeof EVENT_REGISTRY[keyof typeof EVENT_REGISTRY];