import { Request, Response, NextFunction } from "express";
import Logger from "../utils/Logger";

const addSomeValue = (request: Request, response: Response, next: NextFunction) => {
  request.someValue = 'test';
  next();
};

const logBody = (request: Request, response: Response, next: NextFunction) => {
  Logger.info(request.body);
  next();
};

export {
  addSomeValue,
  logBody
}
