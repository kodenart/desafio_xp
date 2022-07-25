import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import { HttpError } from "../utils/HttpError";
import { 
  IInvestimentInput,
  ITransactionInput,
  IClienteCreateInput
} from "../interfaces/Validation";


const validateInvestiments = (req: Request, _res: Response, next: NextFunction) => {
  const { codCliente, codAtivo, qtdeAtivo }: IInvestimentInput = req.body;
  
  const { error } = Joi.object({
    codCliente: Joi.number().integer().required(),
    codAtivo: Joi.number().integer().required(),
    qtdeAtivo: Joi.number().integer().required(),
  }).validate({ codCliente, codAtivo, qtdeAtivo });

  if(error) throw new HttpError(error.message, StatusCodes.UNPROCESSABLE_ENTITY);

  return next();
};


const validateTransaction = (req: Request, _res: Response, next: NextFunction) => {
  const { CodCliente, Valor }: ITransactionInput = req.body;
  
  const { error } = Joi.object({
    CodCliente: Joi.number().integer().required(),
    Valor: Joi.number().required(),
  }).validate({ CodCliente, Valor });

  if(error) throw new HttpError(error.message, StatusCodes.UNPROCESSABLE_ENTITY);

  return next();
};

const validateClientCreation = (req: Request, _res: Response, next: NextFunction) => {
  const { name, email, password, balance }: IClienteCreateInput = req.body;
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    balance: Joi.number()
  }).validate({ name, email, password, balance });

  if(error) throw new HttpError(error.message, StatusCodes.UNPROCESSABLE_ENTITY);

  return next();
};

export {
  validateInvestiments,
  validateTransaction,
  validateClientCreation,
};