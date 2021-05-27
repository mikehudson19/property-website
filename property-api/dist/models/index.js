'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
exports.db = {};
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
}
else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
fs
    .readdirSync(__dirname)
    .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
    .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    exports.db[model.name] = model;
});
Object.keys(exports.db).forEach(modelName => {
    if (exports.db[modelName].associate) {
        exports.db[modelName].associate(exports.db);
    }
});
exports.db.sequelize = sequelize;
exports.db.Sequelize = Sequelize;
