const router = require('express').Router();
const whishListCtrl= require('../controllers/whishList.controller');
router.post('/lista/deseados/productos', whishListCtrl.addWhishProduct);
router.get('/lista/deseados/:id', whishListCtrl.getWhishList);
router.delete('/lista/deseados/producto/:productId/usuario/:userId', whishListCtrl.deleteProductFromWhishList);
module.exports=router;