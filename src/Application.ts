import express, { Express } from 'express';
import morgan from 'morgan';

import registerControllers from './controller';
import Logger from './utils/Logger';

export default class Application {
  service: Express;
  port?: number;

  constructor(port?: number) {
    this.service = express();
    if (port) {
      this.port = port;
    }
    this.initializeServer();
  }

  private initializeServer() {
    this.service.use(morgan('tiny'));
    this.service.use(registerControllers());
  }

  start() {
    this.service.listen( this.port, () => {
      Logger.info(`server started at http://localhost:${ this.port }`);
    });
  }
}