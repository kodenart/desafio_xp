import { IAssetService } from "../interfaces/Asset";
import AssetToClientModel from "../models/AssetToClient";

class AssetService implements IAssetService {
  async getAssetByClient(id: number) {
    const assets = await AssetToClientModel.findRelationshipsByClient(id);
    return assets;
  }
}

export default new AssetService();