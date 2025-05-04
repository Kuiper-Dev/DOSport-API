module.exports = (sequelize, Sequelize) => {
    const products = sequelize.define("DS_Products", {
      productId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },

      code: {
        type: Sequelize.STRING
      },

      name: {
        type: Sequelize.STRING
      },
      
      price: {
        type: Sequelize.DECIMAL,
      },
      categoryId: {
        type: Sequelize.BIGINT,
        foreignKey:true
      },
      sportId: {
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