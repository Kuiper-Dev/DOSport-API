const mysqlConnection = require ('../database/connection2');
const db = require("../models");
//const Users= db.users;
//const sq = db.sequelize;
//const Op = db.Sequelize.Op;
countriesCtrl={};
countriesCtrl.getCountries=async(req, res)=>{
  mysqlConnection.query('SELECT * FROM DS_Countries', (err, rows,fields)=>{
    if(!err){
      res.json(rows);
    }else{
      console.log(err);
    }
  });
};
module.exports= countriesCtrl;