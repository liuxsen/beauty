// 资金管理
import sequelize from '../db';
import * as dbDef from '../models/db';
import * as Koa from 'koa';
import { expensesAttribute } from '../models/db';

const Expenses: dbDef.expensesModel = sequelize.import('../models/expenses');

// 新建店铺的支付款项
export const create = async (ctx: Koa.Context) => {
  const { name, shop_id, original_price, retail_price, token_info } = ctx.body;
  const oNewExpenses: expensesAttribute = await Expenses.create({
    id: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: name,
    shop_id: shop_id,
    original_price: original_price,
    retail_price: retail_price,
    owner_id: token_info.id
  });
  console.log(oNewExpenses);
  if (oNewExpenses) {
    ctx.body = {
      status: {
        code: 0
      },
      data: {
        result: oNewExpenses
      }
    };
  } else {
    ctx.body = {
      status: {
        code: 400,
        msg: '创建失败'
      }
    };
  }
};

// 查询店铺 资金消费列表
export const list = async (ctx: Koa.Context) => {
  const { token_info, shop_id, offset, limit } = ctx.body;
  const aExpensesList: { count: number; rows: expensesAttribute[] } = await Expenses.findAndCountAll({
    limit: +limit,
    offset: +offset,
    where: {
      shop_id: shop_id
    }
  });
  console.log(aExpensesList);
  if (aExpensesList) {
    ctx.body = {
      data: aExpensesList,
      status: {
        code: 0
      }
    };
  } else {
    ctx.body = {
      status: {
        code: 400,
        msg: '查询失败'
      }
    };
  }
};

// 更新资金
export const update = async (ctx: Koa.Context, next: () => void) => {
  const { token_info, shop_id, expenses_id, name, original_price, retail_price } = ctx.body;
  const oExpenses: expensesAttribute = await Expenses.findById(expenses_id);
  const updatedExpenses = await Expenses.update(
    {
      name: name || oExpenses.name,
      original_price: original_price || oExpenses.original_price,
      retail_price: retail_price || oExpenses.retail_price,
      updatedAt: new Date()
    },
    {
      where: {
        shop_id: shop_id,
        owner_id: token_info.id,
        id: expenses_id
      }
    }
  );
  if (updatedExpenses && updatedExpenses[0]) {
    const oNewExpenses = await Expenses.findById(expenses_id);
    ctx.body = {
      data: oNewExpenses,
      status: {
        code: 0
      }
    };
  } else {
    ctx.body = {
      status: {
        code: 400,
        msg: '更新失败'
      }
    };
  }
};

// 删除资金
export const deleteExpenses = async (ctx: Koa.Context) => {
  const { token_info, expenses_id, shop_id } = ctx.body;
  const modifyRows: number = await Expenses.destroy({
    where: {
      id: expenses_id,
      shop_id: shop_id,
      owner_id: token_info.id
    }
  });
  console.log(modifyRows);
  if (modifyRows) {
    ctx.body = {
      data: {
        result: true
      }
    };
  } else {
    ctx.body = {
      status: {
        code: 400,
        msg: '资金不存在'
      }
    };
  }
};
