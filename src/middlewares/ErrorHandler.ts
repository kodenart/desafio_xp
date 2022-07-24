import { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils/HttpError";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const ErrorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { message, status } = err as HttpError;
  res.status(status || 500).json({message});
};