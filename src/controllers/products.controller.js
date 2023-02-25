/*const db = require("../models");
const Products= db.products;
const sq = db.sequelize;
const Op = db.Sequelize.Op;*/
/*Add new Maker*/ 
/*
exports.addProduct= async(req, res)=>{
    try {
        const product = {
          //productId:req.body.productId,
          name: req.body.name,
          productCode:req.body.productCode,
          makerId:body.req.makerId,
          statusId:req.body.statusId,
          unitId:req.body.unitId
        };
    
        Products.create(product)
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
/*Get Products's List*/ 
/*
exports.getProducts = async (req, res)=>{
    try {
        Products.findAll()
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
/*Get Product information*//*
exports.getProduct   = async(req, res)=>{
    try {
        const { id } = req.params;
        await Products.findOne({ where: { productId: id } })
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
/*
exports.getProductByCode   = async(req, res)=>{
    try {
        const { productCode } = req.params;
        await Products.findOne({ where: { productCode: productCode } })
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
productsCtrl.addProducts=async(req, res)=>{
    const {name, productCode, makerId, statusId}=req.body;
    mysqlConnection.query("INSERT INTO DS_Products (name, productCode, makerId, statusId) VALUES (?,?,?,?)", [name, productCode, makerId, statusId],(err, rows, fields)=>{
      if(!err){
        res.json({status:'Product saved'});
      }else{
        console.log(err);
      }
    });

};
productsCtrl.getProductsResume=async(req, res)=>{
  mysqlConnection.query('CALL getProductsResume()', (err, rows, fields)=>{
    if(!err){
      res.json(rows[0]);
    }else{
      console.log(err);
    }
  });
};

productsCtrl.getProducts=async(req, res)=>{
  mysqlConnection.query('CALL getProducts()', (err, rows, results,fields)=>{
    if(!err){
      res.json(rows[0]);
    }else{
      console.log(err);
    }
  });
};
module.exports= productsCtrl;