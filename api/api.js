const express = require('express');
const cron = require('node-cron');

const bodyParser = require('body-parser')
const transporter = require('./email');
const fs = require('fs');
const path = require('path');

//we use dotenv for env variables
const dotenv = require("dotenv")
dotenv.config()

const app = express();

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const database = require('./database');
const departmanRoutes = require('./routes/departments');
const studentRoutes = require('./routes/students');
const Student = require('./models/Student');



database.authenticate().then(() => console.log('Veritabanına Bağlandı')).catch((err) => console.log('Hata: ' + err))
//database bağlantısını kontrol ediyoruz   

database.sync().then(result => {console.log("sync succesfull")}).catch(err => {console.log(err)});
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


 // NODE CRON JOB
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )




cron.schedule(`${process.env.PERIOD} * * * * *`, async ()=> {
    console.log("cron job worked!");

    // Fetch Student instances
    await Student.findAll()
    .then( (students) => {
        console.log(students)
        students = JSON.stringify(students);
        fs.writeFileSync('list.json', students)
    })
    .catch( (err) => {
        console.error(err);
    });

    // Send Mail
    await transporter.sendMail({
        from: 'nodejs16-projetest@outlook.com', // sender address
        to: "19360859068@ogrenci.btu.edu.tr,\
        20360859116@ogrenci.btu.edu.tr,\
        20360859030@ogrenci.btu.edu.tr,\
        20360859032@ogrenci.btu.edu.tr", // list of receivers
        subject: "NODEJS PROJE TEST", // Subject line
        text: "Hello Sir, Students are listed in the attachement", // plain text body
        attachments: [{
            filename: "list.json",
            path: "list.json"
        }]
      })
      .then( (mail) => {
        console.log("mail sent");
        console.log(mail);
      })
      .catch( (err) => {
        console.log("mail cannot delivered");
        console.error(err);
      });
})



//8080 portundan uygulamamızı çalıştırdık.
app.listen(3000, () => {
    console.log('Listining on port 3000');
});