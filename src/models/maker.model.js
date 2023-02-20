module.exports = (sequelize, Sequelize) => {
    const makers = sequelize.define("DS_Makers", {
      makerId: {
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
  
  
    return makers;
  };