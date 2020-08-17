import { Application, Config } from '@ornate/express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { TestController } from './controller';

const PORT = 8083;


@Config({
  routes: [ TestController ],
  middlewares: [
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    morgan('tiny')
  ],
  port: PORT,
  logLevel: 'info'
})
export default class Service extends Application {}

new Service().start();
