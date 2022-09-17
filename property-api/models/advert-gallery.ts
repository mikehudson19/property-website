'use strict';
// const {
//   Model
// } = require('sequelize');

import { Model } from 'sequelize';
import { db } from "../models";

module.exports = (sequelize: any, DataTypes: any) => {
  class AdvertGallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // this.belongsTo(models.Advert);
    }
  };
  AdvertGallery.init({
    advertId: DataTypes.INTEGER,
    headlineImage: DataTypes.STRING,
    imageOne: DataTypes.STRING,
    imageTwo: DataTypes.STRING,
    imageThree: DataTypes.STRING,
    imageFour: DataTypes.STRING,
    imageFive: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'AdvertGallery',
    paranoid: true
  });
  return AdvertGallery;
};
