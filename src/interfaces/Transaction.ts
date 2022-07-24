import { Client } from "../models/entity";

export enum TransactionTypes {
  // eslint-disable-next-line no-unused-vars
  DEPOSIT = 'deposit',
  // eslint-disable-next-line no-unused-vars
  WITHDRAW = 'withdraw'
}

export interface ITransaction {
  client: Client;
  amount: number;
}

export interface IDeposit extends ITransaction {
  type: TransactionTypes.DEPOSIT
}

export interface IWithdraw extends ITransaction {
  type: TransactionTypes.WITHDRAW
}