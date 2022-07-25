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

  public async findAll(): Promise<Asset[]> {
    const assets = await Asset.find();
    return assets;
  }
}

export default new AssetModel();