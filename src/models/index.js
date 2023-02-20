const config=require('../config/config');
const Sequelize = require('sequelize');
const sequelize= new Sequelize(config.database, config.db_user, config.db_password, {
    host:config.db_host,
    dialect:config.dialect,
    operatorsAliases: false,

    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
      }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products= require("./product.model")(sequelize, Sequelize);
db.makers=require("./maker.model")(sequelize, Sequelize);

module.exports = db;