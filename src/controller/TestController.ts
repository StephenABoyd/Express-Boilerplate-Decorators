import { ClassMiddleware, Controller, Delete, Get, Middleware, Options, Patch, Post, Put } from '@ornate/express';
import { NextFunction, Request, Response } from 'express';

import { addSomeValue, logBody } from '../middleware/TestMiddleware';
import TestService from '../service/TestService';
import Logger from '../utils/Logger';

@Controller('/methods')
@ClassMiddleware((req: Request, res: Response, next: NextFunction) => {
  (req as any).dbConnectionString = 'testDbConnection';
  if (req.body.throwError) {
    res.status(500).json({
      error: true
    });
  } else {
    next();
  }
})
export default class TestController {

  testService = new TestService();

  @Get('/test')
  @Middleware(addSomeValue)
  getTest(request: Request, response: Response) {
    Logger.info(request.someValue);
    response.send(request.someValue);
  }

  @Post('/test')
  @Middleware(logBody)
  postTest(request: Request, response: Response) {
    response.json(request.body);
  }

  @Delete('/test')
  deleteTest(request: Request, response: Response) {
    console.log((request as any).dbConnectionString);
    this.testService.returnSuccess(request, response, 'Delete');
  }

  @Options('/test')
  optionsTest(request: Request, response: Response) {
    this.testService.returnSuccess(request, response, 'Options');
  }

  @Put('/test')
  putTest(request: Request, response: Response) {
    this.testService.returnSuccess(request, response, 'Put');
  }

  @Patch('/test')
  patchTest(request: Request, response: Response) {
    this.testService.returnSuccess(request, response, 'Patch');
  }
}