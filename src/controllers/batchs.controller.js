const mysqlConnection = require('../database/connection');
batchCtrl={};

batchCtrl.addBatch=async(req, res)=>{
    mysqlConnection.query('INSERT INTO KS_ProductBatch  set ?',[req.body], (err, rows)=>{
        if(err){
           return res.send(err);
        }else{
            res.json(rows);
        }
    });
}

batchCtrl.addBatchLocation=async(req, res)=>{
    mysqlConnection.query('INSERT INTO KS_BatchLocation  set ?',[req.body], (err, rows)=>{
        if(err){
           return res.send(err);
        }else{
            res.json(rows);
        }
    });
};

batchCtrl.addBatchState=async(req, res)=>{
    mysqlConnection.query('INSERT INTO KS_BatchState  set ?',[req.body], (err, rows)=>{
        if(err){
           return res.send(err);
        }else{
            res.json(rows);
        }
    });
}
