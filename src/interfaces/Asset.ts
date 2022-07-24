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

export interface IAssetService {
  add(assetInfo: IAssetInfo)
  buy(purchaseInfo: IExchange);
  sell(sellInfo: IExchange);
}

export interface IAssetModel {
  create(assetInfo: IAssetInfo): Promise<void>
  findById(id: number): Promise<Asset>
  addAmount(id: number, amount: number): Promise<number>
  subAmount(id: number, amount: number): Promise<number>
}