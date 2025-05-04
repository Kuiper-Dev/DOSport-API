module.exports = (sequelize, Sequelize) => {
    const address = sequelize.define("DS_Address", {
      addressId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      detail: {
        type: Sequelize.STRING
      },
      districtId: {
        type: Sequelize.BIGINT
      },
      userId: {
        type: Sequelize.BIGINT
      },

    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
    return address;
  };