import OperationService from "../../services/Operations";
import { Asset, Client } from "../entity";

const populateOperations = async () => {
  // Clients 
  const person1 = await Client.findOne({ 
    where: {
      email: 'example1@gmail.com'
  }});
  const person2 = await Client.findOne({ 
    where: {
      email: 'example3@gmail.com'
  }});
  const person3 = await Client.findOne({ 
    where: {
      email: 'example5@gmail.com'
  }});

  // Assets
  const asset1 = await Asset.findOne({
    where: {
      name: 'ATIVO1'
    }
  });
  const asset2 = await Asset.findOne({
    where: {
      name: 'ATIVO2'
    }
  });
  const asset3 = await Asset.findOne({
    where: {
      name: 'ATIVO3'
    }
  });

  await OperationService.buy(person1.id, asset3.id, 100);
  await OperationService.buy(person1.id, asset2.id, 12);
  await OperationService.buy(person1.id, asset1.id, 20);

  await OperationService.sell(person1.id, asset3.id, 40);

  await OperationService.buy(person2.id, asset3.id, 10);
  await OperationService.buy(person2.id, asset3.id, 10);

  await OperationService.buy(person3.id, asset3.id, 4);

  await OperationService.sell(person3.id, asset3.id, 1);

  await OperationService.sell(person1.id, asset2.id, 2);
};

export {
  populateOperations
};