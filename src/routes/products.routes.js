const router = require('express').Router();
const productsCtrl= require('../controllers/products.controller');
router.post('/productos', productsCtrl.addProduct);
router.get('/productos',  productsCtrl.getProducts);
router.get('/productos/:code',  productsCtrl.getProductByCode);
router.get('/productos/:id',  productsCtrl.getProduct);

module.exports=router;