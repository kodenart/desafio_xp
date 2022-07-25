import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { HttpError } from "../utils/HttpError";

const checkId = async (req: Request, res: Response, next: NextFunction) => {
  const idToken: number = res.locals.user.id; 
  const { codCliente, CodCliente } = req.body;
  if( idToken === Number(codCliente) || idToken === Number(CodCliente) ) {
    return next();
  }
  throw new HttpError('Algo deu errado, token inválido.', StatusCodes.UNAUTHORIZED);
};

const checkIdParams = async (req: Request, res: Response, next: NextFunction) => {
  const idToken: number = res.locals.user.id; 
  const { id } = req.params;
  if( idToken === Number(id) ) {
    return next();
  }
  throw new HttpError('Algo deu errado, token inválido.', StatusCodes.UNAUTHORIZED);
};

export {
  checkId,
  checkIdParams,
};