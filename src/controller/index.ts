import { Router } from 'express';

import RouterHelper from '@ornate/express';
import TestController from './TestController';

export default function registerControllers(): Router {
  // Returns a list of all controllers
  return RouterHelper([ TestController ]);
}
