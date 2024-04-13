const express = require('express');
const app = express();

const database = require('./database');
const departmanRoutes = require('./routes/department');
const studentRoutes = require('./routes/students');


database.authenticate().then(() => console.log('Veritabanına Bağlandı')).catch((err) => console.log('Hata: ' + err))
//database bağlantısını kontrol ediyoruz   

database.sync().then(result => {console.log(result)}).catch(err => {console.log(err)});
//database şemalarını senkronize etme

//routes
//Sistem ilk routesleri çalıştırmaya çalışır o yüzden öncelikle routesları app.use() ile başa yazdık.
app.use('/department', departmanRoutes);
app.use('/student', studentRoutes);


//not found middleware
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404; 
    res.json({
        error: "not found"
    })
    console.error(error)
});

// other error middleware
app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


//8080 portundan uygulamamızı çalıştırdık.
app.listen(8080, () => {
    console.log('Listining on port 8080');
});