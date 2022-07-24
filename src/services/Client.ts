import { IClientService, IClientTransaction, ICreateClient, IHistoryTransactions, Token } from "../interfaces/Client";
import ClientModel from '../models/Client';
import TransactionModel from "../models/Transaction";
import { HttpError } from "../utils/HttpError";
import { StatusCodes } from "http-status-codes";
import { generateToken } from "../utils/generateToken";
import { Transaction } from "../models/entity";
//  implements IClientService
class ClientService implements IClientService{
  async create(client: ICreateClient): Promise<Token> {
    const { email, name } = client;
    const emailExists = await ClientModel.findByEmail(email);

    if(emailExists.email === email) {
      throw new HttpError(
        'Email já cadastrado, por favor, utilize outro.',
        StatusCodes.CONFLICT
      );
    } 
    
    await ClientModel.create(client);

    const token = generateToken({ email, name });
    return token;
  }

  public async deposit(depositInfo: IClientTransaction) {
    const { id, amount, type } = depositInfo;
    const client = await ClientModel.findById(id);
    
    client.balance = Number(client.balance) + amount;

    // new transaction
    await TransactionModel.create({client, type, amount});
    // updates the client balance on DB
    await client.save();
    return client.balance;
  }

  public async withdraw(depositInfo: IClientTransaction) {
    const { id, amount, type } = depositInfo;
    const client = await ClientModel.findById(id);
    
    if(Number(client.balance) - amount < 0) throw new HttpError(
      'Saldo insuficiente',
      // not sure if that's the correct status but...
      StatusCodes.NOT_ACCEPTABLE,
    );
    // TypeORM returns as string, lovely behavior.
    client.balance = Number(client.balance) - amount;

    // new transaction
    await TransactionModel.create({client, type, amount});
    // updates the client balance on DB
    await client.save();
    return client.balance;
  }

  // all transactions made by a specific client
  public async transactionHistory(id: number): Promise<IHistoryTransactions[]|Transaction[]> {
    const transactionArr = await TransactionModel.getByClientId(id);
    if(transactionArr.length === 0) {
      throw new HttpError('Histórico não encontrado', StatusCodes.NOT_FOUND);
    } 
    
    const mappedArr = transactionArr
      .map((elem) => ({ 
        CodCliente: id,
        Transacao: elem.type,  
        Valor: elem.amount,
        Data: elem.created_at,
      }));
    return mappedArr;
  }


  public async retrieveBalance(id: number) {
    const client = await ClientModel.findById(id);
    if(!client) throw new HttpError('Cliente não encontrado', StatusCodes.NOT_FOUND);
    return { id, balance: client.balance };
  }

}

export default new ClientService();