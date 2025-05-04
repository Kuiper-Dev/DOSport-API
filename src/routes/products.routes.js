const router = require('express').Router();
const productsCtrl= require('../controllers/products.controller');
router.post('/productos', productsCtrl.addProducts);
router.post('/productos/info', productsCtrl.addProductInfo);
//router.get('/productos/info/:id', productsCtrl.getProductInfo);
router.post('/productos/imagen', productsCtrl.addProductImage);
router.get('/productos/categorias/:id',  productsCtrl.getProductCategories);
router.get('/productos/categoria/:id/disciplina/:spid',  productsCtrl.getProductsByCategory);
router.get('/productos',  productsCtrl.getProducts);
router.get('/productos/galeria/:id',  productsCtrl.getProductGallery);
router.get('/productos/resumen/:id',  productsCtrl.getProductsResume);
//router.get('/productos/:code',  productsCtrl.getProductByCode);
//router.get('/productos/:id',  productsCtrl.getProduct);

module.exports=router;