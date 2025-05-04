const mysqlConnection = require ('../database/connection2');
const db = require("../models");
const Address= db.address;
const sq = db.sequelize;
const Op = db.Sequelize.Op;
addressCtrl={}

addressCtrl.addAddress=async(req, res)=>{
  try {
    const address = {
      addressId:req.body.addressId,
      detail:req.body.detail,
      districtId: req.body.districtId,
      userId: req.body.userId,
    };

    Address.create(address)
    .then(data => {
      res.json({"companyId": data.companyId});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ."
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }  
};
addressCtrl.getAddress=async(req, res)=>{
    const { id } = req.params;
    mysqlConnection.query('CALL getUserAddress(?)', id, (err, rows,fields)=>{
      if(!err){
        res.json(rows[0]);
      }else{
        console.log(err);
      }
    });
  };
addressCtrl.updateAddress=async(req, res)=>{
    try {
      await Address.upsert({
        addressd: req.body.userId,
        userName: req.body.userName, 
        avatar: req.body.avatar,  
        uid: req.body.uid, 
        phoneNumber:req.body.phoneNumber, 
        email: req.body.email, 
        DNI: req.body.DNI, 
      })
      .then(([result, created]) => {
        res.json({"addressId":result.userId});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while updating ."
        });
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
module.exports= addressCtrl;