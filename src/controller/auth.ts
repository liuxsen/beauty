import * as JWT from '../utils/jwt';
import * as Koa from 'koa';
import sequelize from '../db';

import * as dbDef from '../models/db';

import { userCode } from '../codes/user';
import { userAttribute } from '../models/db';
const User: dbDef.userModel = sequelize.import('../models/user');

export const login = async (ctx: Koa.Context) => {
  const { email, password } = ctx.body;
  const user: userAttribute = await User.findOne({
    where: {
      password: password,
      email: email
    },
    // exclude 排除密码查询
    attributes: { exclude: ['password'] }
  });
  if (user) {
    const token = JWT.sign({ email: email, password: password });
    ctx.body = {
      user: user,
      token: token,
      status: {
        code: 0
      }
    };
  } else {
    ctx.body = {
      status: {
        msg: userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
      }
    };
  }
};

export const register = async (ctx: Koa.Context) => {
  const { email, password } = ctx.body;
  const hasUser: userAttribute = await User.findOne({
    where: {
      email: email
    }
  });
  // 如果没有用户
  if (!hasUser) {
    const user: userAttribute = await User.create({
      email: email,
      password: password,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: null
    });
    if (user) {
      const token = JWT.sign({ email: user.email, password: user.password, id: user.id });
      ctx.body = {
        token: token,
        status: {
          code: 0
        }
      };
    } else {
      ctx.body = {
        status: {
          msg: '注册失败，用户已经注册'
        }
      };
    }
  } else {
    ctx.body = {
      status: {
        msg: '注册失败，用户已经注册'
      }
    };
  }
};

// 更新用户信息
export const updateUser = async (ctx: Koa.Context) => {
  const { phone, nick, name, password, token_info } = ctx.body;
  // 数据库中的user
  const oldUser: userAttribute = await User.findOne({
    where: {
      id: token_info.id
    }
  });
  if (oldUser) {
    const updateUser = await User.update(
      {
        name: name || oldUser.name,
        password: password || oldUser.password,
        nick: nick || oldUser.nick,
        phone: phone || oldUser.phone
      },
      {
        where: {
          id: token_info.id
        }
      }
    );
    ctx.body = {
      code: updateUser && updateUser[0] ? 0 : 400,
      data: {
        result: updateUser && updateUser[0] ? true : false
      }
    };
  } else {
    ctx.body = {
      code: 400,
      status: {
        msg: '没有改用户'
      }
    };
  }
};
