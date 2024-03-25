const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/Departman', (req, res, next) => {

        database.query('SELECT id, name, student_id FROM nodejsapp."Department";').then(results => {
            res.send(results[0]);
        });
        
});

router.post('/Departman', (req, res, next) => {
    database.query('INSERT INTO nodejsapp."Department"(id, name, student_id)VALUES (?, ?, ?);').then(() => {
        console.log('Veri başarıyla eklendi!');
      });
})

module.exports = router;