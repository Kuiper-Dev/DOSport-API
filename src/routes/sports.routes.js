const router = require('express').Router();
const sportsCtrl= require('../controllers/sports.controller');

router.get('/disciplinas', sportsCtrl.getSports);
module.exports=router;