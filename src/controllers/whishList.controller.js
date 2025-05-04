const db = require("../models");
const WhishProduct=db.whishProducts;
const sq = db.sequelize;
const Op = db.Sequelize.Op;

exports.addWhishProduct = async (req, res)=>{
  try {
    const whishProduct = {
      productId: req.body.productId,
      userId: req.body.userId,
    };
  
    console.log(whishProduct);
  
  
    await WhishProduct.create(whishProduct)
      .then(data => {
        res.json({'productId':data.productId});
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
exports.getWhishList = async(req, res)=>{
  try {
    const {id}=req.params;
    await sq.query("CALL getWhishList(?)", {replacements: [id]}).then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data"
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.deleteProductFromWhishList = async(req, res)=>{
  try {
    const {productId}=req.params;
    const {userId}=req.params;
    
    await sq.query("CALL deleteProductFromWhishList (?,?)", {replacements: [productId, userId]}).then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data"
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getCustomer = async(req, res)=>{
  try {
    const {id}=req.params;
    await sq.query("CALL getCustomer(?)", {replacements: [id]}).then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data"
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.updateCustomer = async(req, res)=>{
  try {
    await customers.upsert({
      customerId: req.body.customerId,
      customerName: req.body.customerName,
      customerStatus: req.body.customerStatus,
    })
    .then(([result, created]) => {
      res.json({"customerId":result.customerId});
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
};
exports.deleteCustomer = async(req, res)=>{
  try {
    await sq.query("CALL getDeleteCustomer()").then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data"
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  } 
};