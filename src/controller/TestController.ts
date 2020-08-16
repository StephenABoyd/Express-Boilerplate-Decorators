import { Request, Response, NextFunction } from 'express';

import { Controller, Delete, Get, Options, Patch, Post, Put } from '@ornate/express'

export const Middleware = (...middleware: any[]) => {
  // tslint:disable-next-line: only-arrow-functions
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // tslint:disable-next-line: only-arrow-functions
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      return 
      return originalMethod.apply(this, ...middleware, args);
    }
  }
}

@Controller('/methods')
export default class TestController {
  @Get('/test')
  getTest(request: Request, response: Response) {
    response.send('Get request successful');
  }

  @Post('/test')
  postTest(request: Request, response: Response) {
    response.send('Post request successful');
  }

  @Delete('/test')
  deleteTest(request: Request, response: Response) {
    response.send('Delete request successful');
  }

  @Options('/test')
  optionsTest(request: Request, response: Response) {
    response.send('Options request successful');
  }

  @Put('/test')
  putTest(request: Request, response: Response) {
    response.send('Put request successful');
  }

  @Patch('/test')
  patchTest(request: Request, response: Response) {
    response.send('Patch request successful');
  }
}