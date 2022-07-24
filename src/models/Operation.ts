import { IOperationModel, OperationType } from "../interfaces/Operation";
import { Client, Asset, Operation } from "./entity";

class OperationModel implements IOperationModel {
  public async add(client: Client, asset: Asset, amount: number, type: OperationType) {
    const newOp = Operation.create({client, asset, type, amount});
    await newOp.save();
  }
  public async byAsset(asset_id: number) {
    const operations = await Operation.find({ 
      relations: {
        client: true,
        asset: true,
      },
      where: { 
        asset: {
          id: asset_id
        }
      }
    });
    return operations;
  }

  public async byClient(client_id: number) {
    const operations = await Operation.find({ 
      relations: {
        client: true,
        asset: true,
      },
      where: { 
        client: {
          id: client_id
        }
      }
    });
    return operations;
  }
}

export default new OperationModel();