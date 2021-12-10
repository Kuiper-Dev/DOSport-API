const router = require('express').Router();
const productsCtrl= require('../controllers/products.controller');
router.get('/products',  productsCtrl.getProducts);
router.get('/products/:code',  productsCtrl.getProduct);

module.exports=router;