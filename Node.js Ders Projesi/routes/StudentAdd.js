const path = require('path');
const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/StudentAdd', (req, res, next) => {

     res.sendFile( path.join(__dirname,'../', 'views','StudentAdd.html') );
     
});

module.exports = router;