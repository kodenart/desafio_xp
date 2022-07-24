import { IAssetToClientModel } from "../interfaces/Operation";
import { Client, Asset, AssetToClient } from "./entity";

class AssetToClientModel implements IAssetToClientModel {
  public async buy(client: Client, asset: Asset, amount: number) {
    client.balance = Number(client.balance) - asset.price * amount;
    await client.save();

    asset.amount = Number(asset.amount) - amount;
    await asset.save();

    // if there's nothing that matchs, verifyRelationships will be assigned as null!
    const existentRelationship = await this.findRelationship(client, asset);
    
    if(!existentRelationship) {
      const newATC = AssetToClient.create({ client, asset, amount });
      await newATC.save();
      return;
    }

    existentRelationship.amount = Number(existentRelationship.amount) + amount;
    existentRelationship.save();
  }

  public async sell(client: Client, asset: Asset, amount: number) {
    client.balance = Number(client.balance) + asset.price * amount;
    await client.save();

    asset.amount = Number(asset.amount) + amount;
    await asset.save();

    // if he's selling, then obviously there's a valid return for that query
    const relationship = await this.findRelationship(client, asset);
    relationship.amount = Number(relationship.amount) - amount;
    relationship.save();
  }

  public async findRelationship(client: Client, asset: Asset) {
    const relationship = await AssetToClient.findOne({
      where: {
        client: {
          id: client.id
        },
        asset: {
          id: asset.id
        },
      },
    });
    return relationship;
  }

  public async findRelationshipsByClient(id: number) {
    const relationship = await AssetToClient.find({
      relations: {
        asset: true
      },
      where: {
        client: {
          id
        },
      },
    });

    // wasn't able to do with typeorm, so I used a little bit of js
    const treatedReturn = relationship
      .map((elem) => ({ 
        client_id: id,
        asset_id: elem.asset.id,
        amount: elem.amount,
        price: elem.asset.price
       }));
    return treatedReturn;
  }

}

export default new AssetToClientModel();