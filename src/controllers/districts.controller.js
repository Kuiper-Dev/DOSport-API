const mysqlConnection = require ('../database/connection2');
const db = require("../models");
//const Users= db.users;
//const sq = db.sequelize;
//const Op = db.Sequelize.Op;
districtsCtrl={};
districtsCtrl.getDistricts=async(req, res)=>{
  mysqlConnection.query('SELECT * FROM DS_Districts', (err, rows,fields)=>{
    if(!err){
      res.json(rows);
    }else{
      console.log(err);
    }
  });
};

districtsCtrl.getDistrictsByCity=async(req, res)=>{
    const { id } = req.params;
    mysqlConnection.query('CALL getDistrictsByCity(?)', id, (err, rows, results,fields)=>{
      if(!err){
        res.json(rows[0]);
      }else{
        console.log(err);
      }
    }); 
  };
module.exports= districtsCtrl;