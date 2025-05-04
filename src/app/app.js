const express= require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser=require('body-parser');
const db = require('../models');
const config = require ('../config/config');

const sequelize = require('../database/connection2');
const addressRoutes = require('../routes/address.routes');
const citiesRoutes = require('../routes/cities.routes');
const countriesRoutes = require('../routes/countries.routes');
const districtsRoutes = require('../routes/districts.routes');
const mailRoutes = require('../routes/mail.routes');
const productsRoutes = require('../routes/products.routes');
const sportsRoutes = require('../routes/sports.routes');
const statesRoutes = require('../routes/states.routes');
const batchesRoutes = require('../routes/batches.routes');
const makersRoutes = require('../routes/makers.routes');
const whishListRoutes = require('../routes/whishList.routes');
const workersRoutes = require('../routes/workers.routes');
const usersRoutes = require('../routes/users.routes');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
let port = process.env.PORT || 3000;
app.set('port', config.port);

app.use(addressRoutes);
app.use(citiesRoutes);
app.use(countriesRoutes);
app.use(districtsRoutes);
app.use(mailRoutes);
app.use(productsRoutes);
app.use(sportsRoutes);
app.use(statesRoutes);
//app.use(batchesRoutes);
//app.use(makersRoutes);
app.use(whishListRoutes);
//app.use(workersRoutes);
app.use(usersRoutes);

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));


/*SEQUELIZE STARTS*/

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.get('/', (req, res)=>{
    res.send('API DOSport');

});
 module.exports=app;