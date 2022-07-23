import { AppDataSource } from "./data-source";

const DBConnection = async () => {
  const connection = await AppDataSource.initialize();

  console.log(`Connection with the database ${connection.options.database} has been initialized!`);

  // SO Signal to interrupt
  process.on('SIGINT', async () => {
    await connection.destroy().then(() => console.log(`\n Database connection is now closed`));
    // matar o processo de fato
    process.exit();
  });
};

export {
  DBConnection
};