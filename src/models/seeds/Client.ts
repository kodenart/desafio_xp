import ClientService from '../../services/Client';

const populateClients = async () => {
  await ClientService.create({
    name: 'Adriano',
    email: 'example1@gmail.com',
    password: 'adriano123',
    balance: 10000.00
  });
  await ClientService.create({
    name: 'Felipe',
    email: 'example2@gmail.com',
    password: 'felipe123',
    balance: 1000.00
  });
  await ClientService.create({
    name: 'Paula',
    email: 'example3@gmail.com',
    password: 'paula123',
    balance: 500.00
  });
  await ClientService.create({
    name: 'Carol',
    email: 'example4@gmail.com',
    password: 'carol123',
    balance: 80000.00
  });
  await ClientService.create({
    name: 'Fernando',
    email: 'example5@gmail.com',
    password: 'fernando123'
  });
  await ClientService.create({
    name: 'Luiza',
    email: 'example6@gmail.com',
    password: 'luiza123',
    balance: 150.00
  });
};

export {
  populateClients
};