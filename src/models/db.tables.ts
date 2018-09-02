// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  expenses:def.expensesModel;
  shop:def.shopModel;
  user:def.userModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    expenses: seq.import(path.join(__dirname, './expenses')),
    shop: seq.import(path.join(__dirname, './shop')),
    user: seq.import(path.join(__dirname, './user')),
  };
  return tables;
};
