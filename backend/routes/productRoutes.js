const express = require('express')

const productRoute = express.Router();
const {addProduct} = require('../controllers/productController');



productRoute.post('/add-product' ,addProduct );
// productRoute.post('/get-product' ,addProduct );



module.exports = productRoute;


