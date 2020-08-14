import { Router } from 'express';

import Logger from '../Logger';
import { HttpMethod, RouteDefinition } from './Model/RouteDefinition';

let longestMethodNameLength = HttpMethod.GET.length;
for (const name in HttpMethod) {
  if (name.length > longestMethodNameLength) {
    longestMethodNameLength = name.length;
  }
}

export default function RouterHelper(routers: any[]) {
  const router = Router();
  routers.forEach(controller => {
    const instance = new controller();
    const prefix = Reflect.getMetadata('prefix', controller);
    const routes: RouteDefinition[] = Reflect.getMetadata('routes', controller);

    routes.forEach(route => {
      const methodName: string = route.methodName as string;
      // @ts-ignore
      router[route.requestMethod](prefix + route.path, (req: Request, res: Response) => {
        instance[methodName](req, res);
      });
      Logger.info(`Endpoint registered with ${instance.constructor.name}: ${''.padEnd(longestMethodNameLength - route.requestMethod.length)}(${route.requestMethod.toUpperCase()})  ${prefix + route.path}`)
    });
  });

  return router;
}