const mysqlConnection = require ('../database/connection2');
const db = require("../models");
const Users= db.users;
const sq = db.sequelize;
const Op = db.Sequelize.Op;
usersCtrl={}
usersCtrl.addUser = async(req, res)=>{
  try {
    const user = {
      userId:req.body.userId,
      userName:req.body.userName,
      avatar: req.body.avatar,
      uid: req.body.uid,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      DNI: req.body.DNI
    };

    Users.create(user)
    .then(data => {
      res.json({"userId": data.userId});
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
usersCtrl.getUsers=async(req, res)=>{
  mysqlConnection.query('SELECT * FROM DS_Users', (err, rows,fields)=>{
    if(!err){
      res.json(rows[0]);
    }else{
      console.log(err); 
    }
  });
};
usersCtrl.getUser=async(req, res)=>{
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM DS_Users WHERE uid= ?', id, (err, rows,fields)=>{
    if(!err){
      res.json(rows[0]);
    }else{
      console.log(err);
    }
  });
};
usersCtrl.updateUser=async(req, res)=>{
  try {
    await Users.upsert({
      userId: req.body.userId,
      userName: req.body.userName, 
      avatar: req.body.avatar,  
      uid: req.body.uid, 
      phoneNumber:req.body.phoneNumber, 
      email: req.body.email, 
      DNI: req.body.DNI, 
    })
    .then(([result, created]) => {
      res.json({"userId":result.userId});
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
module.exports= usersCtrl;