const Product = require("../models/Products")


exports.getProduct=async(req, res) => {
    try {
      const result = await Product.find({}) 
      res.status(200).json({
       status: 'success',
       message: 'Data inserted successfully!',
       data: result
     })
   } catch (error) {
     res.status(400).json({
       status: 'fail',
       message: ' Data is not inserted ',
       error: error.message
     })
   }
  }


  exports.saveProduct=async (req, res, next) => {
    try {
       const result = await Product.create(req.body) 
       result.logger()
       res.status(200).json({
        status: 'success',
        message: 'Data inserted successfully!',
        data: result
      })
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: ' Data is not inserted ',
        error: error.message
      })
    }
  
  
  }



