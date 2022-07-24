import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import OperationsService from "../services/Operations";

class OperationController {
  async buyAsset(req: Request, res: Response){
    const { codCliente, codAtivo, qtdeAtivo } = req.body;
    await OperationsService.buy(codCliente, codAtivo, qtdeAtivo);
    return res.status(StatusCodes.CREATED).json({message: 'Compra efetuada com sucesso.'});
  }

  async sellAsset(req: Request, res: Response){
    const { codCliente, codAtivo, qtdeAtivo } = req.body;
    await OperationsService.sell(codCliente, codAtivo, qtdeAtivo);
    return res.status(StatusCodes.CREATED).json({message: 'Venda efetuada com sucesso.'});
  }

  async historyAsset(req: Request, res: Response){
    const { id } = req.params;
    const history = await OperationsService.assetHistory(Number(id));
    res.status(200).json({ ...history });
  }

  async historyClient(req: Request, res: Response){
    const { id } = req.params;
    const history = await OperationsService.clientHistory(Number(id));
    res.status(200).json({ ...history });
  }
}

export default new OperationController();