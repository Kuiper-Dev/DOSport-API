const db = require("../models");
const Products= db.products;
const sq = db.sequelize;
const Op = db.Sequelize.Op;
/*Add new Maker*/ 
exports.addProduct= async(req, res)=>{
    try {
        const product = {
          productId:req.body.productId,
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
};
/*Get Products's List*/ 
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
};
/*Get Product information*/
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
};

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
};