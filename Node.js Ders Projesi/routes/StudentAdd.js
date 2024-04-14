const path = require('path');
const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/StudentAdd', (req, res, next) => {

     res.sendFile( path.join(__dirname,'../', 'views','StudentAdd.html') );
     
});


router.get('/StudentDel', (req, res) => {
     res.sendFile( path.join(__dirname,'../', 'views','StudentDel.html') );
})
module.exports = router;