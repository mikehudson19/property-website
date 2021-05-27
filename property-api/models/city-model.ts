'use strict';

import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
    }
  };
  City.init({
    name: DataTypes.STRING,
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
    timestamps: false
  });
  return City;
};