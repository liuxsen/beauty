import sequelize from '../db';
import * as dbDef from '../models/db';
import * as Koa from 'koa';
import { shopAttribute, shopInstance } from '../models/db';
const Shop: dbDef.shopModel = sequelize.import('../models/shop');

// 新建店铺
export const create = async (ctx: Koa.Context) => {
  const { name, desc, shop_avatar, token_info } = ctx.body;
  const newShop: shopAttribute = await Shop.create({
    id: null, // 店铺id
    name: name, // 店铺名字
    desc: desc, // 店铺描述
    shop_avatar: shop_avatar, // 店铺头像
    shop_owner_id: token_info.id, // 店铺创建者
    createdAt: new Date(),
    updatedAt: new Date()
  });
  if (newShop) {
    ctx.body = {
      status: {
        code: 0
      },
      data: {
        result: true
      }
    };
  } else {
    ctx.body = {
      status: {
        code: 400,
        msg: '新建失败'
      }
    };
  }
};

// 更新店铺
export const update = async (ctx: Koa.Context) => {
  const { shop_id, token_info, name, desc, shop_avatar, rent } = ctx.body;
  const targetShop: shopAttribute = await Shop.findById(shop_id);
  // 如果店铺所有者id跟请求者id相同，
  const aUpdateResult = await Shop.update(
    {
      name: name || targetShop.name,
      desc: desc || targetShop.desc,
      shop_avatar: shop_avatar || targetShop.shop_avatar,
      rent: rent || targetShop.rent,
      updatedAt: new Date()
    },
    {
      where: {
        shop_owner_id: token_info.id
      }
    }
  );
  if (aUpdateResult && aUpdateResult[0]) {
    ctx.body = {
      status: {
        code: 0
      },
      data: {
        result: true
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
