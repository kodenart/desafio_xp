import { Client } from '../entity';
import ClientService from '../../services/Client';
import { TransactionTypes } from '../../interfaces/Transaction';

const populateTransactions = async () => {
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

  await ClientService.withdraw({id: person1.id, type: TransactionTypes.WITHDRAW, amount: 4000.00});
  await ClientService.withdraw({id: person1.id, type: TransactionTypes.WITHDRAW, amount: 2000.00});
  await ClientService.deposit({id: person2.id, type: TransactionTypes.DEPOSIT, amount: 600.00});
  await ClientService.deposit({id: person3.id, type: TransactionTypes.DEPOSIT, amount: 300.00});
  await ClientService.deposit({id: person1.id, type: TransactionTypes.DEPOSIT, amount: 1500.00});
  await ClientService.withdraw({id: person3.id, type: TransactionTypes.WITHDRAW, amount: 100.00});

};

export {
  populateTransactions,
};