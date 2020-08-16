import { Request, Response } from "express";

export default class TestService {
  returnSuccess(request: Request, response: Response, type: string) {
    response.send(`${type} request successful`).status(200);
  }
}