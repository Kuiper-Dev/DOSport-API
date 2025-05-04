const router = require('express').Router();
const districtsCtrl= require('../controllers/districts.controller');
router.get('/distritos',  districtsCtrl.getDistricts);
router.get('/distritos/:id',  districtsCtrl.getDistrictsByCity);
//router.get('/products/:code',  productsCtrl.getProduct);

module.exports=router;