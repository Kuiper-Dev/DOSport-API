module.exports = (sequelize, Sequelize) => {
    const productsUnits = sequelize.define("DS_ProductUnits", {
      unitId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
  
    return productsUnits;
  };