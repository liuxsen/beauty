"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
exports.default = new Sequelize('koa_project', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});
//# sourceMappingURL=db.js.map