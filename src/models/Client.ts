import { ICreateClient } from "../interfaces/Client";
import { Client } from "./entity";

class ClientModel {
  // create new client method
  public async create(client: ICreateClient): Promise<Client> {
    const clientToDB = Client.create({ ...client });
    const newClient = await clientToDB.save();
    return newClient;
  } 

  public async findById(id: number): Promise<Client> {
    const client = await Client.findOne({ where: { id } });
    return client;
  }

  public async findByEmail(email: string): Promise<Client> {
    const client = await Client.findOne({ where: { email } });
    
    return client;
  }

}

export default new ClientModel();