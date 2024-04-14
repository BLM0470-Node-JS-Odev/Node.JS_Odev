// Gerekli modülleri dahil ediyoruz
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const database = require('../database'); // database bağlantısı için database.js dosyasını içe aktarıyoruz


// Öğrenci listesini veritabanından alıp JSON formatında bir dosyaya yazan fonksiyon
function writeStudentList(database) {
    database.query(`SELECT * FROM nodejsapp2."Student" `, { type: database.QueryTypes.SELECT })
        .then(rows => {
            const öğrenciListesi = JSON.stringify(rows, null, 2);
            fs.writeFileSync('studentList.json', öğrenciListesi);
            console.log("Öğrenci listesi başarıyla JSON dosyasına yazıldı.");
        })
        .catch(err => {
            console.error(err.message);
        });
}


module.exports = writeStudentList;

// router.get('/CreateJSON', (req, res, next) => {
    
//     // Öğrenci listesini dosyaya yazma işlemini gerçekleştiriyoruz
//     writeStudentList(database);

//     res.send("Kaydedildi");
// });

// module.exports = router;