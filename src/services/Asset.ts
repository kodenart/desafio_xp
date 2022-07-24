import { IAssetService } from "../interfaces/Asset";
import AssetToClientModel from "../models/AssetToClient";
import AssetModel from "../models/Asset";
import { HttpError } from "../utils/HttpError";
import { StatusCodes } from "http-status-codes";

class AssetService implements IAssetService {
  async getAssetByClient(id: number) {
    const assets = await AssetToClientModel.findRelationshipsByClient(id);
    if(!assets) throw new HttpError('Ativo não encontrado', StatusCodes.NOT_FOUND);
    const mappedAssets = assets
      .map((elem) => ({
        CodCliente: elem.client_id,
        CodAtivo: elem.asset_id,
        QtdeAtivo: elem.amount,
        Valor: elem.price,
      }));
    return mappedAssets;
  }

  async getAssetById(id: number) {
    const asset = await AssetModel.findById(id);
    if(!asset) throw new HttpError('Ativo não encontrado', StatusCodes.NOT_FOUND);
    return { CodAtivo: asset.id, QtdeAtivo: asset.amount, Valor: asset.price };
  }
}

export default new AssetService();