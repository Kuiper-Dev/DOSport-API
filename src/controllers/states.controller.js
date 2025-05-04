const mysqlConnection = require ('../database/connection2');
const db = require("../models");
//const Users= db.users;
//const sq = db.sequelize;
//const Op = db.Sequelize.Op;
statesCtrl={};
statesCtrl.getStates=async(req, res)=>{
  mysqlConnection.query('SELECT * FROM DS_States', (err, rows,fields)=>{
    if(!err){
      res.json(rows);
    }else{
      console.log(err);
    }
  });
};

statesCtrl.getStatesByCountry=async(req, res)=>{
    const { id } = req.params;
    mysqlConnection.query('CALL getStatesByCountry(?)', id, (err, rows, results,fields)=>{
      if(!err){
        res.json(rows[0]);
      }else{
        console.log(err);
      }
    }); 
  };
module.exports= statesCtrl;