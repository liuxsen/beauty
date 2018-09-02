"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koa_bodyparser_ts_1 = require("koa-bodyparser-ts");
const path = require("path");
const koaStatic = require("koa-static");
const routes_1 = require("./routes");
const app = new Koa();
const staticPath = './static';
app.use(koaStatic(path.join(__dirname, staticPath)));
app.use(koa_bodyparser_ts_1.default());
app.use(async (ctx, next) => {
    // the parsed body will store in ctx.request.body
    // if nothing was parsed, body will be an empty object {}
    ctx.body = ctx.request.body;
    await next();
});
app.use(async (ctx, next) => {
    // Log the request to the console
    console.log('Url:', ctx.url);
    // Pass the request to the next middleware function
    await next();
});
app.use(routes_1.default.routes());
app.use(routes_1.default.allowedMethods());
app.listen(3000);
console.log('Server running on port 3000');
//# sourceMappingURL=server.js.map