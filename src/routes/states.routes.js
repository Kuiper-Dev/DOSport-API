const router = require('express').Router();
const statesCtrl= require('../controllers/states.controller');
router.get('/estados',  statesCtrl.getStates);
router.get('/estados/:id',  statesCtrl.getStatesByCountry);
//router.get('/products/:code',  productsCtrl.getProduct);

module.exports=router;