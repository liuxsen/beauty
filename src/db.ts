const Sequelize = require('sequelize');
export default new Sequelize('koa_project', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
});
