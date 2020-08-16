// import { Application, Config } from '@ornate/express';
import TestController from './controller/TestController';
import morgan from 'morgan';
import bodyParser from 'body-parser';
const PORT = 8083;


// @Config({
//   routes: [ TestController ],
//   middlewares: [
//     bodyParser.urlencoded({ extended: false }),
//     bodyParser.json(),
//     morgan('tiny')
//   ],
//   port: PORT,
//   logLevel: 'info'
// })
// export default class Service extends Application {}

// new Service().start();

import RouteHelper from '@ornate/express';
import express from 'express';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(RouteHelper([TestController], { logLevel: 'error' }));

app.listen(PORT);
