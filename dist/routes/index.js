"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
const auth = require("../controller/auth");
router.post('/login', auth.login);
exports.default = router;
//# sourceMappingURL=index.js.map