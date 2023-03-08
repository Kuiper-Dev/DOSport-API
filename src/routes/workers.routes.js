const router = require('express').Router();
const workersCtrl= require('../controllers/workers.controller');
router.post('/colaboradores', workersCtrl.addWorker);
//router.post('/productos/info', productsCtrl.addProductInfo);
//router.post('/productos/imagen', productsCtrl.addProductImage);
router.get('/colaboradores',  workersCtrl.getWorkers);
//router.get('/productos/imagen/:id',  productsCtrl.getProductsImage);
//router.get('/productos/resumen',  productsCtrl.getProductsResume);
//router.get('/productos/:code',  productsCtrl.getProductByCode);
//router.get('/productos/:id',  productsCtrl.getProduct);

module.exports=router;