const mysql = require ('mysql2');
 const fs = require('fs');
 const path = require('path');

const mysqlConnection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'DoSport',
    port:33060,
});


mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        console.log('Ni entré');
        return;
    }else{
        console.log('DB is connected');
    }
});

module.exports= mysqlConnection;
//module.exports= sequelize;