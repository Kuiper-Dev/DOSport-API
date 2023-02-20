module.exports = (sequelize, Sequelize) => {
    const productsStatus = sequelize.define("DS_ProductSatus", {
      statusId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: Sequelize.STRING
      },
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
  
    return productsStatus;
  };