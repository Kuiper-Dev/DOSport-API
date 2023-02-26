const router = require('express').Router();
const batchesCtrl= require('../controllers/batches.controller');
router.post('/lotes',  batchesCtrl.addBatch);
router.post('/lotes/ubicacion',  batchesCtrl.addBatchLocation);
router.get('/lotes',  batchesCtrl.getBatches);
router.get('/lotes/productos/:id',  batchesCtrl.getBatchesByProduct);
router.get('/lotes/ubicacion/:id',  batchesCtrl.getBatchLocation);
//router.get('/products/:code',  productsCtrl.getProduct);

module.exports=router;