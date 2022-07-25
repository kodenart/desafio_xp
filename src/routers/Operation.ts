import { Router } from "express";
import { checkId } from "../auth/CheckIdentity";
import { TokenAuth } from "../auth/TokenAuth";
import OperationController from "../controllers/Operation";

const OperationRouter = Router();

OperationRouter.post('/comprar', TokenAuth, checkId,OperationController.buyAsset);

OperationRouter.post('/vender', TokenAuth, checkId, OperationController.sellAsset);

OperationRouter.get('/ativos/historico/:id', OperationController.historyAsset);

OperationRouter.get('/conta/historico/:id', OperationController.historyClient);

export {
  OperationRouter
};