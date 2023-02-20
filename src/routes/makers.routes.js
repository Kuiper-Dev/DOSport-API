const router = require('express').Router();
const makersCtrl= require('../controllers/makers.controller');
router.get('/fabricantes',  makersCtrl.getMakers);
//router.get('/products/:code',  productsCtrl.getProduct);

module.exports=router;