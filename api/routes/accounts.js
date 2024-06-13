const express = require('express');
const router = express.Router();
const account = require('../controllers/account');


const checkAuth = require('../middlewares/check-auth');

//Login Account
router.post('/sign-in' , account.signin);

//Create account
router.post('/sign-up', account.signup);

//Remove Account  PROTECTED ROUTE
router.post('/sign-off', checkAuth, account.remove);


module.exports = router;