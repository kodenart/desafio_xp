import { Client, Transaction } from "../models/entity";
import { TransactionTypes } from "./Transaction";

/* eslint-disable no-unused-vars */
export interface ICreateClient {
  name: string;
  email: string;
  password: string;
  // if no balance is passed when creating an user, he receives 0.00 as default value
  balance?: number;
}

export type Token = string;

export interface IClient extends ICreateClient {
  id: number
}

export interface IHistoryTransactions {
  CodCliente: number;
  Transacao: string;
  Valor: number;
  Data: Date;
}

export interface IClientService {
  create(client: ICreateClient): Promise<Token>;
  deposit(depositInfo: IClientTransaction): Promise<number>;
  withdraw(withdrawInfo: IClientTransaction): Promise<number>;
  transactionHistory(id: number): Promise<IHistoryTransactions[] | Transaction[]>;
}

export interface IClientTransaction {
  id: number;
  type: TransactionTypes;
  amount: number;
}
