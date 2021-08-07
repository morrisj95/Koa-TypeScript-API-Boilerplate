import Router from '@koa/router';
import compose from 'koa-compose';
import { AnyRouter } from '../typedefs/Router';

export const combineRouters = (...routers: AnyRouter[]) => {
  const middlewares: Router.Middleware[] = [];
  routers.forEach((router: AnyRouter) => {
    middlewares.concat([router.routes(), router.allowedMethods()]);
  });
  return compose(middlewares);
};
