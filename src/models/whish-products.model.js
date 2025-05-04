module.exports = (sequelize, Sequelize) => {
    const whishProducts = sequelize.define("DS_WhishProducts", {
      productId: {
        type: Sequelize.BIGINT,
        foreignKey:true
      },
      userId: {
        type: Sequelize.BIGINT,
        foreignKey:true
      },
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
    whishProducts.removeAttribute('id');
    return whishProducts;
  };