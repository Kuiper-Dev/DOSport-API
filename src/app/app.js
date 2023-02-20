const express= require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('../models');
const config = require ('../config/config');


const productsRoutes = require('../routes/products.routes');
const makersRoutes = require('../routes/makers.routes');
const app = express();
app.use(cors());
let port = process.env.PORT || 3000;
app.set('port', config.port);


app.use(productsRoutes);
app.use(makersRoutes);

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