const adminLogin = require('../controllers/adminController');

const express = require('express');

const adminRouter = express.Router();

adminRouter.post('/admin-login' , adminLogin);

module.exports = adminRouter;


