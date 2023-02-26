const router = require('express').Router();
const productsCtrl= require('../controllers/products.controller');
router.post('/productos', productsCtrl.addProducts);
router.post('/productos/info', productsCtrl.addProductInfo);
router.post('/productos/imagen', productsCtrl.addProductImage);
router.get('/productos',  productsCtrl.getProducts);
router.get('/productos/imagen/:id',  productsCtrl.getProductsImage);
router.get('/productos/resumen',  productsCtrl.getProductsResume);
//router.get('/productos/:code',  productsCtrl.getProductByCode);
//router.get('/productos/:id',  productsCtrl.getProduct);

module.exports=router;