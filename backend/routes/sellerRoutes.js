
const express = require('express');
const sellerLogin = require('../controllers/sellerController');
const sellerSignup = require('../controllers/sellerController');

const sellerRouter = express.Router();


sellerRouter.post('/seller-signup' ,sellerSignup );



module.exports=sellerRouter;

