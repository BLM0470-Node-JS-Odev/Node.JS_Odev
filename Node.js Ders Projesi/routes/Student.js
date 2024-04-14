
const express = require('express');
const router = express.Router();
const database = require('../database');
const students = {};



router.get('/Student', async (req, res, next) => {

    //databasede istediğimiz bilgileri getirecek sql komudunu yazdık
    const students = await database.query('SELECT id, name, email, counter, department_id FROM nodejsapp2."Student";');
    // const departmant = await database.query('SELECT id, name FROM nodejsapp."Department";');
  
    res.send(students[0]);
    //JSON şeklinde bilgileri ekrana yazdırdık
  });


  
router.post('/Student', (req, res, next) => {
    //index.html'den gelen bilgileri atadık
    const id = parseInt(req.body.id);
    const name = req.body.name;
    const department_name = req.body.department_name;
    const email = req.body.email;
    const counter = parseInt(req.body.counter);

    //Verileri eklemek için çalıştırmamız gereken sql kodları çalıştırdık.
    

    database.query(`INSERT INTO nodejsapp2."Department"(id, name) VALUES (${id}, '${department_name}') `).then(results => {
      database.query(`INSERT INTO nodejsapp2."Student"(id, name, email, counter, department_id) VALUES (${id}, '${name}', '${email}', ${counter}, ${id})`).then(results => {
        database.query(`UPDATE nodejsapp2."Department" SET  student_id=${id} WHERE id=${id}`).then(results => {});
      });   
    });
    
    
    
    database.query(`UPDATE nodejsapp2."Öğrenci_Sayaç" SET sayac = sayac + 1`).then(results => {});



    res.redirect('/');
    
});

router.post('/StudentDel', (req, res, next) => {

    const id = parseInt(req.body.id);

    //Verileri eklemek için çalıştırmamız gereken sql kodları çalıştırdık.
    database.query(`DELETE FROM nodejsapp2."Department" WHERE id = ${id}`).then(results => {});
    database.query(`UPDATE nodejsapp2."Öğrenci_Sayaç" SET sayac = sayac -1`).then(results => {});


    res.redirect('/');
    
});


module.exports = router;