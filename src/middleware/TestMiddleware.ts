import { NextFunction, Request, Response } from 'express';

import Logger from '../utils/Logger';

const addSomeValue = (request: Request, response: Response, next: NextFunction) => {
  request.someValue = 'test';
  next();
};

const logBody = (request: Request, response: Response, next: NextFunction) => {
  Logger.info(request.body);
  request.body.id = '123';
  next();
};

export {
  addSomeValue,
  logBody
}
