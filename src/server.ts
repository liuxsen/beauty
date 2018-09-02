import * as Koa from 'koa';
import bodyParser from 'koa-bodyparser-ts';
import * as path from 'path';
import * as koaStatic from 'koa-static';
import router from './routes';
import filter from './middleware/filter-router';

const app = new Koa();

const staticPath = './static';
app.use(koaStatic(path.join(__dirname, staticPath)));
app.use(bodyParser());

app.use(async (ctx, next) => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}
  ctx.body = ctx.request.body;
  await next();
});
app.use(filter);

app.use(async (ctx, next) => {
  // Log the request to the console
  console.log('Url:', ctx.url);
  // Pass the request to the next middleware function
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

console.log('Server running on port 3000');
