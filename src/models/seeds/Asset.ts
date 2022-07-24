import AssetModel from '../Asset';

const populateAssets = async () => {
  await AssetModel.create({name: 'ATIVO1', price: 37.80, amount: 100});
  await AssetModel.create({name: 'ATIVO2', price: 20.50, amount: 1000});
  await AssetModel.create({name: 'ATIVO3', price: 10.20, amount: 10000});
  await AssetModel.create({name: 'ATIVO4', price: 90.10, amount: 100});
  await AssetModel.create({name: 'ATIVO5', price: 400.10, amount: 100});
  await AssetModel.create({name: 'ATIVO6', price: 50.30, amount: 10});
};

export {
  populateAssets
};