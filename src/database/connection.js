const mysql = require ('mysql');

const mysqlConnection=mysql.createConnection({
    host:'kuiper.clvx5mktpgqg.us-east-1.rds.amazonaws.com',
    user:'administrator',
    password:'spaMonaco_Monza19',
    database: 'doSport_Invetory',
    port:3306,
    multipleStatements: true
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
//module.exports= sequelize;

