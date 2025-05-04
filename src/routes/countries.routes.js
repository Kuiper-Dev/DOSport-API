const router = require('express').Router();
const countriesCtrl= require('../controllers/countries.controller');
router.get('/paises',  countriesCtrl.getCountries);
//router.get('/usuarios/:id',  usersCtrl.getUser);
//router.get('/products/:code',  productsCtrl.getProduct);

module.exports=router;