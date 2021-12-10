const express= require('express');
const morgan = require('morgan');

const config = require ('../config/config');


const productsRoutes = require('../routes/products.routes');
const app = express();
let port = process.env.PORT || 3000;
app.set('port', config.port);


app.use(productsRoutes);

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));




app.get('/', (req, res)=>{
    res.send('API DOSport');

});
 module.exports=app;