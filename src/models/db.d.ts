// tslint:disable
import * as Sequelize from 'sequelize';


// table: expenses
export interface expensesAttribute {
  id:number;
  shop_id?:number;
  name?:string;
  original_price?:number;
  retail_price?:number;
  createdAt:Date;
  updatedAt:Date;
  owner_id?:number;
}
export interface expensesInstance extends Sequelize.Instance<expensesAttribute>, expensesAttribute { }
export interface expensesModel extends Sequelize.Model<expensesInstance, expensesAttribute> { }

// table: shop
export interface shopAttribute {
  id:number;
  name?:string;
  desc?:string;
  shop_avatar?:string;
  shop_owner_id?:number;
  rent?:number;
  createdAt:Date;
  updatedAt:Date;
}
export interface shopInstance extends Sequelize.Instance<shopAttribute>, shopAttribute { }
export interface shopModel extends Sequelize.Model<shopInstance, shopAttribute> { }

// table: user
export interface userAttribute {
  id:number;
  email?:string;
  password?:string;
  name?:string;
  nick?:string;
  sex?:number;
  phone?:string;
  wx_id?:string;
  role?:number;
  createdAt:Date;
  updatedAt:Date;
}
export interface userInstance extends Sequelize.Instance<userAttribute>, userAttribute { }
export interface userModel extends Sequelize.Model<userInstance, userAttribute> { }
