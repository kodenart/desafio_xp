import { Router } from "express";
import AssetController from '../controllers/Asset';

const AssetRouter = Router();

AssetRouter.get('/:id', AssetController.fetchById);
AssetRouter.get('/', AssetController.fetchAll);

export {
  AssetRouter
};