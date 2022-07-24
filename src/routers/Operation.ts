import { Router } from "express";
import OperationController from "../controllers/Operation";

const OperationRouter = Router();

OperationRouter.post('/comprar', OperationController.buyAsset);

OperationRouter.post('/vender', OperationController.sellAsset);

OperationRouter.get('/ativos/historico/:id', OperationController.historyAsset);

OperationRouter.get('/conta/historico/:id', OperationController.historyClient);

export {
  OperationRouter
};