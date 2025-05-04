const config=require('../config/config');
const Sequelize = require('sequelize');
const sequelize= new Sequelize(config.database, config.db_user, config.db_password, {
    host:config.db_host,
    dialect:config.dialect,
    operatorsAliases: 0,
    port:33060,

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

db.address= require("./address.model")(sequelize, Sequelize);
db.products= require("./product.model")(sequelize, Sequelize);
db.users= require("./user.model")(sequelize, Sequelize);
db.whishProducts=require("./whish-products.model")(sequelize, Sequelize);

//db.makers=require("./maker.model")(sequelize, Sequelize);

module.exports = db;