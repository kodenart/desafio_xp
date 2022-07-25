import dotenv from 'dotenv';
import express from 'express';
import { DBConnection } from './config/db';
import { ErrorHandler } from './middlewares/ErrorHandler';
import Router from './routers';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

DBConnection();

app.use(Router);

app.use(ErrorHandler);


export {
  app
};