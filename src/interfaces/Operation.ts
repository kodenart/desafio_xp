/* eslint-disable no-unused-vars */
import { Asset, Client } from "../models/entity";

export enum OperationType {
  // eslint-disable-next-line no-unused-vars
  PURCHASE = "purchase",
  // eslint-disable-next-line no-unused-vars
  SELL = "sell"
}

export interface IAssetToClientModel {
  buy(client: Client, asset: Asset, amount: number): Promise<void>
  sell(client: Client, asset: Asset, amount: number): Promise<void>
}

export interface IOperationModel {
  add(
     client: Client,
     asset: Asset,
     amount: number,
     type: OperationType.PURCHASE | OperationType.SELL,
    ): Promise<void>
}

export interface IOperationService {
  buy(
    client_id: number,
    asset_id: number,
    amount: number,
  ): Promise<void>

  sell(
    client_id: number,
    asset_id: number,
    amount: number,
  ): Promise<void>
}