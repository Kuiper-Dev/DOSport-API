const router = require('express').Router();
const usersCtrl= require('../controllers/users.controller');
router.post('/usuarios', usersCtrl.addUser);
router.get('/usuarios',  usersCtrl.getUsers);
router.get('/usuarios/:id',  usersCtrl.getUser);
router.put('/usuarios',  usersCtrl.updateUser);

module.exports=router;