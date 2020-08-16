import { Request, Response, NextFunction } from 'express';

import { Controller, Delete, Get, Options, Patch, Post, Put, Middleware, ClassMiddleware } from '@ornate/express'
import Logger from '../utils/Logger';
import TestService from '../service/TestService';
import { addSomeValue, logBody } from '../middleware/TestMiddleware';

@Controller('/methods')
@ClassMiddleware((req: Request, res: Response, next: NextFunction) => {
  (req as any).dbConnectionString = 'testDbConnection';
  next();
})
export default class TestController {

  testService = new TestService();

  @Get('/test')
  @Middleware(addSomeValue)
  getTest(request: Request, response: Response) {
    Logger.info(request.someValue);
    this.testService.returnSuccess(request, response, 'Get');
  }

  @Post('/test')
  @Middleware(logBody)
  postTest(request: Request, response: Response) {
    this.testService.returnSuccess(request, response, 'Post');
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