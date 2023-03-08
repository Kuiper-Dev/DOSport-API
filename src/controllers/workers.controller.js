const mysqlConnection = require ('../database/connection');
workersCtrl={}
workersCtrl.addWorker=async(req, res)=>{
    const {userId, roleId, workerAvatar}=req.body;
    mysqlConnection.query("INSERT INTO DS_Workers (userId, roleId, workerAvatar) VALUES (?,?,?)", [userId, roleId,workerAvatar],(err, rows, fields)=>{
      if(!err){
        res.json(rows.insertId);
      }else{
        console.log(err);
      }
    });

};
workersCtrl.addProductInfo = async(req, res)=>{
  const {description, productId}=req.body;
  mysqlConnection.query("INSERT INTO DS_ProductInfo (description, productId) VALUES (?,?)", [description, productId],(err, rows, fields)=>{
    if(!err){
      res.json({status:'Product saved'});
    }else{
      console.log(err);
    }
  });
};
workersCtrl.addProductImage = async(req, res)=>{
  const {url, productId}=req.body;
  mysqlConnection.query("INSERT INTO DS_WorkersImage (url, productId) VALUES (?,?)", [url, productId],(err, rows, fields)=>{
    if(!err){
      res.json({status:'Image added'});
    }else{
      console.log(err);
    }
  });
};
workersCtrl.getProductsResume=async(req, res)=>{
  mysqlConnection.query('CALL getProductsResume()', (err, rows, fields)=>{
    if(!err){
      res.json(rows[0]);
    }else{
      console.log(err);
    }
  });
};

workersCtrl.getWorkers=async(req, res)=>{
  mysqlConnection.query('CALL getWorkers()', (err, rows,fields)=>{
    if(!err){
      res.json(rows[0]);
    }else{
      console.log(err);
    }
  });
};

workersCtrl.getProductsImage=async(req, res)=>{
  const { id } = req.params;
  mysqlConnection.query('CALL getProductImages(?)', id, (err, rows, results,fields)=>{
    if(!err){
      res.json(rows[0]);
    }else{
      console.log(err);
    }
  }); 
}
module.exports= workersCtrl;