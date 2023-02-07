const express = require('express')
const app = express()
require("colors");

const port = 5000






app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports=app