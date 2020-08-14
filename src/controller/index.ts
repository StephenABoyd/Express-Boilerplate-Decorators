import { Router } from 'express';

import RouterHelper from '../utils/RouterHelper';
import TestController from './TestController';

export default function registerControllers(): Router {
  // Returns a list of all controllers
  return RouterHelper([ TestController ]);
}
