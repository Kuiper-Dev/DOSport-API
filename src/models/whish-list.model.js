module.exports = (sequelize, Sequelize) => {
    const whishList = sequelize.define("DS_WhishList", {
      listId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
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
  
    return whishList;
  };