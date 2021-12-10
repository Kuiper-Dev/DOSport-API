const mysqlConnection = require('../database/connection');
productsCtrl={};

/** 
 * getProducts
 * Description: return all products of the product's table
 */
productsCtrl.getProducts= async (req, res)=>{
    mysqlConnection.query('CALL SP_getProducts', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
};

productsCtrl.getProduct= async (req, res)=>{
    mysqlConnection.query('CALL SP_getProduct()', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
};

module.exports=productsCtrl;

