const mysqlConnection = require('../database/connection');
batchesCtrl={};

batchesCtrl.addBatch=async(req, res)=>{
    mysqlConnection.query('INSERT INTO DS_ProductBatch  set ?',[req.body], (err, rows)=>{
        if(err){
           return res.send(err);
        }else{
            res.json(rows);
        }
    });
}

batchesCtrl.addBatchLocation=async(req, res)=>{
    mysqlConnection.query('INSERT INTO DS_BatchLocation  set ?',[req.body], (err, rows)=>{
        if(err){
           return res.send(err);
        }else{
            res.json(rows);
        }
    });
};

batchesCtrl.addBatchState=async(req, res)=>{
    mysqlConnection.query('INSERT INTO KS_BatchState  set ?',[req.body], (err, rows)=>{
        if(err){
           return res.send(err);
        }else{
            res.json(rows);
        }
    });
}
 /**Retorna la lista de lotes existenstes*/
batchesCtrl.getBatches = async(req, res)=>{
    mysqlConnection.query('CALL getBatches()', (err, rows,fields)=>{
        if(!err){
          res.json(rows[0]);
        }else{
          console.log(err);
        }
      });
};

 /**Retorna la ubicacion de un lote*/
 batchesCtrl.getBatchesByProduct = async(req, res)=>{
    const { id } = req.params;
    mysqlConnection.query('CALL getBatchesByProduct(?)', id, (err, rows, results,fields)=>{
      if(!err){
        res.json(rows[0]);
      }else{
        console.log(err);
      }
    }); 
};

 /**Retorna la ubicacion de un lote*/
 batchesCtrl.getBatchLocation = async(req, res)=>{
    const { id } = req.params;
    mysqlConnection.query('CALL getBatchLocation(?)', id, (err, rows, results,fields)=>{
      if(!err){
        res.json(rows[0]);
      }else{
        console.log(err);
      }
    }); 
};
module.exports= batchesCtrl;
