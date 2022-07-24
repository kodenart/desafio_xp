import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TransactionTypes } from "../interfaces/Transaction";
import ClientService from "../services/Client";
// import { ICreateClient } from '../interfaces/Client';

class ClientController {

  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password, balance } = req.body;
    const token = await ClientService.create({ name, email, password, balance });    
    return res.status(StatusCodes.CREATED).json({ token });
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
    console.log(balance);

    return res.status(StatusCodes.OK).json({CodCliente: balance.id, Saldo: balance.balance});
  }

  async transactionHistory(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const history = await ClientService.transactionHistory(Number(id));

    return res.status(StatusCodes.OK).json({ history });

  }

}

export default new ClientController();