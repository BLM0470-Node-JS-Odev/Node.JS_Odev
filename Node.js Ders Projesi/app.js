const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const database = require('./database');
const userRoutes = require('./routes/Departman');
const studentRoutes = require('./routes/Student');
const studentAddRoutes = require('./routes/StudentAdd');

database.authenticate().then(() => console.log('Veritabanına Bağlandı')).catch((err) => console.log('Hata: ' + err))
    

app.use(bodyParser.urlencoded({ extended: false }));


//routes
app.use(userRoutes);
app.use(studentRoutes);
app.use(studentAddRoutes);



app.use((req, res) => {
    res.status(404).sendFile( path.join(__dirname, 'views', '404.html') );
})




app.listen(8080, () => {
    console.log('Listining on port 8080');
});