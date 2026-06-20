import { BaseEntity } from "../common/base.types";
import { Currency, WalletStatus } from "../common/enums";

export interface Wallet extends BaseEntity {
  userId: string;
  balance: number;
  currency: Currency;
  status: WalletStatus;
}