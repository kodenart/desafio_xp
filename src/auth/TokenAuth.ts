import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { HttpError } from "../utils/HttpError";
import { JWT_SECRET } from "../utils/generateToken";
import Client from "../models/Client";

interface IDecoded {
  name: string;
  email: string;
}

const TokenAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if(!authorization) {
    throw new HttpError(
        'É necessário um token de autenticação para acessar essa rota.',
        StatusCodes.UNAUTHORIZED
    );
  } 
  try {
    const decoded = jwt.verify(authorization, JWT_SECRET) as IDecoded;
    const { email } = decoded;
    const client = await Client.findByEmail(email);
    
    if(!client) throw new HttpError('Token inválido', StatusCodes.UNAUTHORIZED); 
    // I'll use this on another middleware
    res.locals.user = { id: Number(client.id) };
    next();
  } catch (error) {
    throw new HttpError('Token inválido', StatusCodes.UNAUTHORIZED); 
  }
};

export {
  TokenAuth,
};