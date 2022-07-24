import { Router } from "express";
import AssetController from "../controllers/Asset";
import ClientController from "../controllers/Client";
require('express-async-errors');

const ClientRouter = Router();

ClientRouter.post('/cadastro', ClientController.create);

ClientRouter.post('/deposito', ClientController.deposit);

ClientRouter.post('/saque', ClientController.withdraw);

ClientRouter.get('/historico/:id', ClientController.transactionHistory);

ClientRouter.get('/ativos/:id', AssetController.fetchByClient);

ClientRouter.get('/:id', ClientController.clientBalance);

export {
  ClientRouter,
};