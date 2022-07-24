import { IDeposit, IWithdraw } from "../interfaces/Transaction";
import { Transaction } from "./entity";

class TransactionModel {
  public async create(transactionInfo: IDeposit | IWithdraw): Promise<Transaction> {
      const transaction = Transaction.create({ ...transactionInfo });
      await transaction.save();
      return transaction;
  }

  public async getByClientId(id: number): Promise<Transaction[]> {
    const transactions = await Transaction.find({ 
      select: {
        type: true,
        amount: true,
        created_at: true,
    },
      where: { 
        client: {
          id
        }
    }
   });
    return transactions;
  }
}

export default new TransactionModel();