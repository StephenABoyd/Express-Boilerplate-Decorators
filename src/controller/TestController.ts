import { Request, Response } from 'express';

import { Controller, Delete, Get, Options, Patch, Post, Put } from '../utils/RouterHelper';

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