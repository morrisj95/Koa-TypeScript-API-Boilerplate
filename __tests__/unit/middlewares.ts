import Router from '@koa/router';
import compose from 'koa-compose';
import { combineRouters } from '../../src/middleware/combine-routers';

const testRouter: Router = new Router();
const testRouter2: Router = new Router();

describe('combineRouters', () => {
  describe("doesn't throw", () => {
    test('wiuth no routers', () => {
      combineRouters();
    });

    test('with one router', () => {
      combineRouters(testRouter);
    });

    test('with multiple routers routers', () => {
      combineRouters(testRouter, testRouter2);
    });
  });

  describe('expansion', () => {
    test('expands to a proper middleware function', () => {
      const desiredMiddleware = compose([
        testRouter.routes(),
        testRouter.allowedMethods(),
      ]);
      const testMiddleware = combineRouters(testRouter);
      // yes, this test is exceptionally explicit/overbearing. :)
      expect(testMiddleware.toString()).toEqual(desiredMiddleware.toString());
    });
  });

  describe('can be app.used', () => {
    test.todo('with 0 routers');
    test.todo('with 1 router');
    test.todo('with multiple routers');
  });
});
