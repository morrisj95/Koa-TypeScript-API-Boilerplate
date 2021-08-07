import * as Koa from 'koa';
import Router from '@koa/router';

export type AnyRouter = Router<any, {}>;

export type KoaCtx<P = any, T = any, R = any> = Koa.Context<
  P,
  Router.IParamContext<T, {}>,
  R
>;

export type KoaGet<P = any> = (ctx: KoaCtx, next: Koa.Next) => Promise<P>;
export type KoaPost<P = any> = (ctx: KoaCtx, next: Koa.Next) => Promise<P>;
