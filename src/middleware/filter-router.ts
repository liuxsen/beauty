// 过滤路由，
import * as Koa from 'koa';
const JWT = require('../utils/jwt');
const allowPage = ['/login', '/register'];
const USERCODE = require('../codes/user');
export default async (ctx: Koa.Context, next: () => void) => {
  const url = ctx.originalUrl;
  const token = ctx.request.headers.token;
  if (allowPage.indexOf(url) > -1) {
    console.log('当前路由可以访问');
    await next();
  } else {
    if (token) {
      const user = JWT.decoded(token);
      //   如果user合法
      if (user) {
        ctx.body = {
          ...ctx.body,
          token_info: {
            ...user
          }
        };
        await next();
      } else {
        //   user token 非法
        ctx.body = {
          code: 304,
          msg: USERCODE.FAIL_USER_TOKEN
        };
      }
    }
  }
};
