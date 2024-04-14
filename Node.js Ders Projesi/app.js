//typescript

const express = require('express');
const app = express();

require('dotenv').config()
//.env dosyası bağlantısı için

const path = require('path');
const bodyParser = require('body-parser');
const database = require('./database');
const departmanRoutes = require('./routes/Departman');
const studentRoutes = require('./routes/Student');
const studentAddRoutes = require('./routes/StudentAdd');

database.authenticate().then(() => console.log('Veritabanına Bağlandı')).catch((err) => console.log('Hata: ' + err))
//database bağlantısını kontrol ediyoruz   

app.use(bodyParser.urlencoded({ extended: false }));

//routes
//Sistem ilk routesleri çalıştırmaya çalışır o yüzden öncelikle routesları app.use() ile başa yazdık.
app.use(departmanRoutes);
app.use(studentRoutes);
app.use(studentAddRoutes);

//hata sayfamızın çalışması için app.use() yerine app.get() kullandık. Çünkü bir hata durumunda ilk '/' doğru olacağı için ana sayfayı açmasını
//istemiyoruz get() fonksiyonu bunu engelliyor.
app.get('/', (req, res, next) => {
    res.sendFile( path.join(__dirname, 'views', 'index.html') );
})


//son dizin olarak bir hata durumunda hata sayfasını açmasını sağlıyoruz.
app.use((req, res) => {
    res.status(404).sendFile( path.join(__dirname, 'views', '404.html') );
})



//8080 portundan uygulamamızı çalıştırdık.
app.listen(process.env.PORT, () => {
    console.log('Listining on port 8080');
});