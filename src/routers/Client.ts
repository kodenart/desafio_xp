import { Router } from "express";
import { checkId, checkIdParams } from "../auth/CheckIdentity";
import { authLogin } from "../auth/Login";
import { TokenAuth } from "../auth/TokenAuth";
import AssetController from "../controllers/Asset";
import ClientController from "../controllers/Client";
import { validateClientCreation, validateTransaction } from "../middlewares/InputValidator";
require('express-async-errors');

const ClientRouter = Router();

ClientRouter.post('/login', authLogin);

ClientRouter.post('/cadastro', validateClientCreation, ClientController.create);

ClientRouter.post('/deposito', validateTransaction, TokenAuth, checkId, ClientController.deposit);

ClientRouter.post('/saque', validateTransaction, TokenAuth, checkId, ClientController.withdraw);

ClientRouter.get('/historico/:id', TokenAuth, ClientController.transactionHistory);

ClientRouter.get('/ativos/:id', AssetController.fetchByClient);

ClientRouter.get('/:id', TokenAuth, checkIdParams, ClientController.clientBalance);

export {
  ClientRouter,
};