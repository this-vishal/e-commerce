const express = require('express');

const router = express.Router();
const userLogin = require('../controllers/userController');
const userSignup = require('../controllers/userController');

router.post('/login-user' ,userLogin )
router.post('/signup-user' ,userSignup)

module.exports = router;



