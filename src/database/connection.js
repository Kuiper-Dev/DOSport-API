const mysql = require ('mysql');

const mysqlConnection=mysql.createConnection({
    host:'database-1.clvx5mktpgqg.us-east-1.rds.amazonaws.com'
    ,user:'admin'
    ,password:'rasengan_Do22'
    ,database:'DoSport'
    ,port:3306
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected');
    }
});

module.exports= mysqlConnection;

