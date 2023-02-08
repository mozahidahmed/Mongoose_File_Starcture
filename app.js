const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// middleware
app.use(express.json());
app.use(cors());



const productRoute=require('./routes/product.route')





// posting to database
app.use('/product',productRoute)





module.exports = app;
















// {
//     "name":"Chal",
//     "description":'gskajdvbkjasgd asjdguas dakjsdva',
//     "price":70,
//     "unit": "kg",
//     "quantity":50,
//     "status":"in-stock"

    
// }