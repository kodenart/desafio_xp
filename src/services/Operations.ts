import { IOperationService, OperationType } from "../interfaces/Operation";
import ClientModel from "../models/Client";
import AssetModel from "../models/Asset";
import { HttpError } from "../utils/HttpError";
import { StatusCodes } from "http-status-codes";
import OperationModel from "../models/Operation";
import AssetToClientModel from "../models/AssetToClient";

class OperationService implements IOperationService{
  public async buy(client_id: number, asset_id: number, amount: number): Promise<void> {
    // checar se ele tem dinheiro suficiente para comprar e se a corretora tem ações suficientes
    const client = await ClientModel.findById(client_id);
    const asset = await AssetModel.findById(asset_id);

    const totalPrice = Number(asset.price) * amount;
    const possibleAmount = Number(asset.amount);
    
    if((Number(client.balance) - totalPrice) < 0) {
      // not sure if that's the correct code
     throw new HttpError('Saldo insuficiente.', StatusCodes.PAYMENT_REQUIRED);
    }

    if(possibleAmount - amount < 0) {
      throw new HttpError(
       'No momento, não há ativos suficientes para a ordem demandada.',
       StatusCodes.BAD_REQUEST
       );
    }
    await AssetToClientModel.buy(client, asset, amount);
    await OperationModel.add(client, asset, amount, OperationType.PURCHASE);
  }


  public async sell(client_id: number, asset_id: number, amount: number): Promise<void> {
    // checar se ele tem ações suficientes
    const client = await ClientModel.findById(client_id);
    const asset = await AssetModel.findById(asset_id);
    const relationship = await AssetToClientModel.findRelationship(client, asset);

    if(!relationship) {
      throw new HttpError(
        'Ativos insuficientes para executar a ordem de venda.',
        StatusCodes.BAD_REQUEST
        );
    }

    if(relationship.amount - amount < 0) {
      throw new HttpError(
        'Ativos insuficientes para executar a ordem de venda.',
        StatusCodes.BAD_REQUEST
      );
    }

    await AssetToClientModel.sell(client, asset, amount);
    await OperationModel.add(client, asset, amount, OperationType.SELL);
  }

  public async assetHistory(asset_id: number) {
    const operations = await OperationModel.byAsset(asset_id);
    if(operations.length === 0) {
      throw new HttpError('Ativo inexistente.', StatusCodes.NOT_FOUND);
    }

    const mappedOperations = operations
      .map((elem) => ({
        CodCliente: elem.client.id,
        CodAtivo: elem.asset.id,
        Tipo: elem.type === 'purchase' ? 'compra' : 'venda',
        QtdeAtivo: elem.amount,
        Data: elem.created_at,
      }));
    return mappedOperations;
  }

  public async clientHistory(client_id: number) {
    const operations = await OperationModel.byClient(client_id);
    if(operations.length === 0) {
      throw new HttpError(
        'O cliente especificado nunca operou ou é inexistente.',
        StatusCodes.NOT_FOUND
      );
    }

    const mappedOperations = operations
      .map((elem) => ({
        CodAtivo: elem.asset.id,
        Tipo: elem.type === 'purchase' ? 'compra' : 'venda',
        QtdeAtivo: elem.amount,
        Data: elem.created_at,
      }));
    return mappedOperations;
  }
}

export default new OperationService();