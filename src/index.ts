import { default as Koa } from 'koa';

import json from 'koa-json';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import router from './routes';

const app = new Koa();

app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(router);
app.use(serve('./build'));

app.listen(3001, () => {
  console.log('Koa started');
});
