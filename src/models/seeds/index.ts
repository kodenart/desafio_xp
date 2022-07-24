import { populateClients } from "./Client";
import { populateTransactions } from "./Transaction";
import { populateAssets } from "./Asset";
import { populateOperations } from "./Operation";

import { DBConnection } from "../../config/db";

const populateDB = async () => {
  await DBConnection().then( async () => {
    await populateClients();
    await populateTransactions();
    await populateAssets();
    await populateOperations();
    console.log('The Database has been populated succesfully!');
    process.exit();
  });
};

populateDB();