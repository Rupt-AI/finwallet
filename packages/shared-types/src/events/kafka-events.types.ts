export interface KafkaEvent<T = unknown> {
  eventId: string;
  eventType: string;
  timestamp: string;
  service: string;
  payload: T;
}

export interface UserCreatedEvent {
  userId: string;
  email: string;
}

export interface WalletCreditedEvent {
  walletId: string;
  amount: number;
}