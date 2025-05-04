const mysqlConnection = require ('../database/connection2');
sportsCtrl={};
sportsCtrl.getSports=async(req, res)=>{
    mysqlConnection.query('CALL getSports()', (err, rows, fields)=>{
      if(!err){
        res.json(rows[0]);
      }else{
        console.log(err);
      }
    });
  };
  module.exports= sportsCtrl;