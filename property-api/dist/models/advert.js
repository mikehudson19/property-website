'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// const {
//   Model
// } = require('sequelize');
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Advert extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User);
        }
    }
    ;
    Advert.init({
        title: DataTypes.STRING,
        province: DataTypes.STRING,
        city: DataTypes.STRING,
        price: DataTypes.INTEGER,
        details: DataTypes.TEXT,
        status: DataTypes.ENUM('Live', 'Hidden', 'Deactivated'),
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Advert',
    });
    return Advert;
};
