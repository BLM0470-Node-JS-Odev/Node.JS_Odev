
const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/Student', (req, res, next) => {
    const end = [];

    database.query('SELECT id, name, email, counter, department_id FROM nodejsapp."Student";').then(results => {
        results[0].forEach((person) => {
            console.log(person.email);
          });
          res.send(results[0]);
      
    });
    
});

router.post('/Student', (req, res, next) => {
    const id = parseInt(req.body.id);
    const name = req.body.name;
    const department_name = req.body.department_name;
    const email = req.body.email;
    const counter = parseInt(req.body.counter);
    const department_id = parseInt(req.body.department_id);

    database.query(`INSERT INTO nodejsapp."Department"(id, name) VALUES (${id}, '${department_name}') `).then(results => {});
    database.query(`INSERT INTO nodejsapp."Student"(id, name, email, counter, department_id) VALUES (${id}, '${name}', '${email}', ${counter}, ${department_id})`).then(results => {});
    database.query(`UPDATE nodejsapp."Department" SET  student_id=${id} WHERE id=${id}`).then(results => {});
    res.redirect('/Student');
    
});

module.exports = router;