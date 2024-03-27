//mvc mimarisi için test amaçlı oluşturulan daldır.

const express = require('express');
const app = express();

const path = require('path');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

const errorController = require('./controllers/errors');

app.use('/admin', adminRoutes);
app.use(userRoutes);

//404 page
app.use(errorController.get404Page);

//middlewares

/*
app.use('/api', (req, res, next) => {   //uygulamanın api dizini çalıştırıldığında çalışacak middleware '/api' ile başlayan her istekte çalışır
    console.log("middleware 1 çalıştırıldı");
    next(); //middleware çalıştır sonrakine geç
});

app.use((req, res, next) => {
    console.log("middleware 2 çalıştırıldı");
    next();
});
*/

app.listen(3000, ()=> {
    console.log("listening on port 3000")
});