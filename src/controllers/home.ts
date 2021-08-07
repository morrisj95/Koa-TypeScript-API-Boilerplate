import { KoaGet, KoaPost } from '../typedefs/Router';

interface HelloRequest {
  name: string;
}

export const get: KoaGet<void> = async (ctx, next) => {
  ctx.body = { msg: 'Hello world!' };
  await next();
};

export const post: KoaPost<void> = async (ctx, next) => {
  const data = <HelloRequest>(<unknown>ctx.request.body);
  ctx.body = { name: data.name };
  await next();
};
