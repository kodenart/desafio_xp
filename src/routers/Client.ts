import { Router } from "express";
import ClientController from "../controllers/Client";

const ClientRouter = Router();

ClientRouter.post('/cadastro', ClientController.create);

ClientRouter.post('/deposito', ClientController.deposit);

ClientRouter.post('/saque', ClientController.withdraw);

ClientRouter.get('/historico', ClientController.transactionHistory);

ClientRouter.get('/:id', ClientController.clientBalance);

export {
  ClientRouter,
};