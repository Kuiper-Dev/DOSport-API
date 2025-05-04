const router = require('express').Router();
const addressCtrl= require('../controllers/address.controller');
router.post('/direcciones',  addressCtrl.addAddress);
router.get('/direcciones/:id',  addressCtrl.getAddress);
//router.put('/usuarios',  usersCtrl.updateUser);

module.exports=router;