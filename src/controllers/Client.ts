import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TransactionTypes } from "../interfaces/Transaction";
import ClientService from "../services/Client";
// import { ICreateClient } from '../interfaces/Client';

class ClientController {

  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password, balance } = req.body;
    const token = await ClientService.create({ name, email, password, balance });    
    return res.status(StatusCodes.OK).json({ token });
  }

  async deposit(req: Request, res: Response): Promise<Response> {
    const { CodCliente, Valor } = req.body;
    const novoSaldo = await ClientService.deposit({
      id: CodCliente,
      amount: Valor,
      type: TransactionTypes.DEPOSIT
    });
    return res.status(StatusCodes.OK).json({ message: `Novo saldo: ${novoSaldo}` });
  }

  async withdraw(req: Request, res: Response): Promise<Response> {
    const { CodCliente, Valor } = req.body;
    const novoSaldo = await ClientService.withdraw({
      id: CodCliente,
      amount: Valor,
      type: TransactionTypes.WITHDRAW
    });
    return res.status(StatusCodes.OK).json({ message: `Novo saldo: ${novoSaldo}` });
  }

  async clientBalance(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const balance = await ClientService.retrieveBalance(Number(id));
    if(!balance) {
      return res.status(StatusCodes.NOT_FOUND).json({message: 'Cliente não encontrado'});
    }

    return res.status(StatusCodes.OK).json({CodCliente: balance.id, Saldo: balance.balance});
  }

  async transactionHistory(req: Request, res: Response): Promise<Response> {
    const { CodCliente } = req.body;
    const history = await ClientService.transactionHistory(CodCliente);
    if(history.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({message: 'Cliente não encontrado'});
    }

    return res.status(StatusCodes.OK).json({ history });

  }

}

export default new ClientController();