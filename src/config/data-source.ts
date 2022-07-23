import "reflect-metadata";
import { DataSource } from "typeorm";
import { Client, Asset, Transaction, AssetToClient, Operation } from "../models/entity";

// Caso queira rodar localmente: além de criar o banco de dados manualmente
// terás de colocar suas variáveis de ambiente 
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || 'localhost',
    port: 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'xp-db',
    synchronize: true,
    logging: false,
    entities: [Client, Asset, Transaction, AssetToClient, Operation],
    migrations: [],
    subscribers: [],
});
