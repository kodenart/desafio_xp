import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import AssetService from "../services/Asset";

class AssetController {
  public async fetchByClient(req: Request, res: Response){
    const { id } = req.params;
    const assets = await AssetService.getAssetByClient(Number(id));
    return res.status(StatusCodes.OK).json({ ...assets });
  }

  public async fetchById(req: Request, res: Response){
    const { id } = req.params;
    const asset = await AssetService.getAssetById(Number(id));
    return res.status(StatusCodes.OK).json({ ...asset });
  }

  public async fetchAll(req: Request, res: Response){
    const assets = await AssetService.getAllAssets();
    return res.status(200).json({ ...assets });
  }

}

export default new AssetController();