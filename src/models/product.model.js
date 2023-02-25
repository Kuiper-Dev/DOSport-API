module.exports = (sequelize, Sequelize) => {
    const products = sequelize.define("DS_Products", {
      /*productId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },*/
      name: {
        type: Sequelize.STRING
      },
      productCode: {
        type: Sequelize.STRING
      },
      makerId: {
        type: Sequelize.BIGINT,
        foreignKey:true
      },
      statusId: {
        type: Sequelize.BIGINT,
        foreignKey:true
      },
      unitId: {
        type: Sequelize.BIGINT,
        foreignKey:true
      }
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
    return products;
  };