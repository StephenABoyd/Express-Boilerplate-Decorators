import { Application, Config } from '@ornate/express';
import TestController from './controller/TestController';
import morgan from 'morgan';
const PORT = 8082;

@Config({
  routes: [ TestController ],
  middlewares: [ morgan('tiny') ],
  port: PORT,
  logLevel: 'info'
})
export default class Service extends Application {}

new Service().start();
