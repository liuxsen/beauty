import * as Router from 'koa-router';
const router = new Router();

import * as auth from '../controller/auth';
import * as Shop from '../controller/shop';
import * as Expenses from '../controller/expenses';

// 登录
router.post('/login', auth.login);
// 注册
router.post('/register', auth.register);
// 更新用户信息
router.post('/profile/update', auth.updateUser);

// 创建店铺
router.post('/shop/create', Shop.create);
router.post('/shop/update', Shop.update);

// 资金
router.post('/expenses/create', Expenses.create);
router.post('/expenses/list', Expenses.list);
router.post('/expenses/update', Expenses.update);
router.post('/expenses/delete', Expenses.deleteExpenses);
export default router;
