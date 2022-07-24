import { IOperationModel, OperationType } from "../interfaces/Operation";
import { Client, Asset, Operation } from "./entity";

class OperationModel implements IOperationModel {
  public async add(client: Client, asset: Asset, amount: number, type: OperationType) {
    const newOp = Operation.create({client, asset, type, amount});
    await newOp.save();
  }
}

export default new OperationModel();