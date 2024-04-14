const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/Departman', (req, res, next) => {

        //databasede istediğimiz bilgileri getirecek sql komudunu yazdık
        database.query('SELECT id, name, student_id FROM nodejsapp2."Department";').then(results => {
            res.send(results[0]);
            //JSON şeklinde bilgileri ekrana yazdırdık
        });
        
});


module.exports = router;