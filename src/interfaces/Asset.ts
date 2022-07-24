/* eslint-disable no-unused-vars */
// export interface IAssetOperation {

import { Asset } from "../models/entity";

// }

export interface IExchange {
  client_id: string;
  asset_id: string;
  amount: string;
}

export interface IAssetInfo {
  name: string;
  price: number;
  amount: number;
}

export interface IAssetModel {
  create(assetInfo: IAssetInfo): Promise<void>
  findById(id: number): Promise<Asset>
  // addAmount(id: number, amount: number): Promise<number>
  // subAmount(id: number, amount: number): Promise<number>
}

export interface IAssetService {
  getAssetByClient(id: number)
}