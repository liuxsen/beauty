"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        nick: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        sex: {
            type: DataTypes.INTEGER(2),
            allowNull: true,
            defaultValue: '0'
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        wx_id: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    }, {
        tableName: 'user'
    });
};
//# sourceMappingURL=user.js.map