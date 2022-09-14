'use strict';
// const {
//   Model
// } = require('sequelize');

import { Model } from 'sequelize';
import { db } from "../models";

module.exports = (sequelize: any, DataTypes: any) => {
  class Advert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.User);
    }
  };
  Advert.init({
    title: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    price: DataTypes.INTEGER,
    details: DataTypes.TEXT,
    status: DataTypes.ENUM('Live', 'Hidden', 'Deactivated'),
    userId: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    carports: DataTypes.INTEGER,
    size: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Advert',
    paranoid: true
  });
  return Advert;
};
