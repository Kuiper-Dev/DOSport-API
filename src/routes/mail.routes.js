const router = require('express').Router();
const mailCtrl= require('../controllers/mail.controller');
router.post('/envio', mailCtrl.envioCorreo);
module.exports=router;