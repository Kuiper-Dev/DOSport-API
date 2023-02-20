module.exports = (sequelize, Sequelize) => {
    const products = sequelize.define("DS_Products", {
      productId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      productCode: {
        type: Sequelize.STRING
      },
      makerId: {
        type: Sequelize.BIGINT
      },
      statusId: {
        type: Sequelize.BIGINT
      },
      unitId: {
        type: Sequelize.BIGINT
      }
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
    return products;
  };