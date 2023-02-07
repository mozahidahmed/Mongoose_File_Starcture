const express = require('express')
const mongoose=require('mongoose')
const dotenv = require ("dotenv").config()
require("colors");
const port =5000

// app get from get file
const app=require("./app")


// connect database 
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Database Connect Successfull".red.bold)

})







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`.yellow.bold)
})