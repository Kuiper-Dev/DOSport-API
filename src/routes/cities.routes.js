const router = require('express').Router();
const citiesCtrl= require('../controllers/cities.controller');
router.get('/ciudades',  citiesCtrl.getCities);
router.get('/ciudades/:id',  citiesCtrl.getCitiesByState);
//router.get('/products/:code',  productsCtrl.getProduct);

module.exports=router;