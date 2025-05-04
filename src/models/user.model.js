module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("DS_Users", {
      userId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      userName: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING,
      },
      uid: {
        type: Sequelize.BIGINT
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      DNI: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
    return users;
  };