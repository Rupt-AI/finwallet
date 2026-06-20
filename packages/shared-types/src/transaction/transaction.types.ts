import { BaseEntity } from "../common/base.types";
import { Currency, TransactionStatus } from "../common/enums";

export interface Transaction extends BaseEntity {
  fromWalletId: string;
  toWalletId: string;
  amount: number;
  currency: Currency;
  status: TransactionStatus;
  reference: string;
}