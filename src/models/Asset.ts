import { IAssetInfo, IAssetModel } from "../interfaces/Asset";
import { Asset } from "./entity";

class AssetModel implements IAssetModel {
  public async create(assetInfo: IAssetInfo): Promise<void> {
    const newAsset = Asset.create({ ...assetInfo });
    await newAsset.save();
  }

  public async findById(id: number): Promise<Asset> {
    const asset = await Asset.findOne({ where: { id }});
    return asset;
  }

  public async addAmount(id: number, amount: number) {
    const asset = await this.findById(id);
    asset.amount = Number(asset.amount) + amount;
    await asset.save();
    return asset.amount;
  }

  public async subAmount(id: number, amount: number) {
    const asset = await this.findById(id);
    asset.amount = Number(asset.amount) - amount;
    await asset.save();
    return asset.amount;
  }

}

export default new AssetModel();