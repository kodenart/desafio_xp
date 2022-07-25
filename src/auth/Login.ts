import {  Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ClientModel from "../models/Client";
import { HttpError } from "../utils/HttpError";
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/generateToken";

const authLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const client = await ClientModel.findByEmail(email as string);
  if(!client) throw new HttpError('Email ou senha inválidos.', StatusCodes.UNAUTHORIZED);
  const checkPassword = bcrypt.compareSync(password, client.password);
  if(!checkPassword) throw new HttpError('Email ou senha inválidos.', StatusCodes.UNAUTHORIZED);

  const token = generateToken({ email, name: client.name });
  return res.status(200).json({ token });
};

export { authLogin };