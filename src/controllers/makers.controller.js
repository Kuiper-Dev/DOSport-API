//const mysqlConnection = require('../database/connection');
//makersCtrl={};
/*makersCtrl.addProduct=async(req, res)=>{
    mysqlConnection.query('INSERT INTO KS_Makers  set ?',[req.body], (err, rows)=>{
        if(err){
           return res.send(err);
        }else{
            res.json(rows);
        }
    });
};
makersCtrl.getMakers = async(req, res)=>{
    await mysqlConnection.query('SELECT maker.makerId, maker.name FROM KS_Makers as maker', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
}
module.exports=makersCtrl;*/
/*
const db = require("../models");
const Makers= db.makers;
const sq = db.sequelize;
const Op = db.Sequelize.Op;*/

/*Add new Maker*/ 
/*
exports.addMaker= async(req, res)=>{
    try {
        const maker = {
          makerId:req.body.makerId,
          name: req.body.name,
        };
    
        Makers.create(maker)
        .then(data => {
          res.json(data);
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
};*/
/*Get Maker's List*/ 
/*
exports.getMakers = async (req, res)=>{
    try {
        Makers.findAll()
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving ."
            });
          });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};*/
/*Get Maker information*/
/*
exports.getMaker = async(req, res)=>{
    try {
        const { id } = req.params;
        await Makers.findOne({ where: { makerId: id } })
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving ."
          });
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }   
};*/
const mysqlConnection = require ('../database/connection');
productsCtrl={}
productsCtrl.getMakers=async(req, res)=>{
  mysqlConnection.query('CALL getMakers()', (err, rows,fields)=>{
    if(!err){
      res.json(rows[0]);
    }else{
      console.log(err);
    }
  });
};
module.exports= productsCtrl;
