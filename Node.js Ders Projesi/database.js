const Sequelize = require('sequelize');
//database bağlantısı için sequelize npm kütüphanesini çağırdık.


require('dotenv').config()
//.env dosyasında saklayın

const database = new Sequelize({
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  });

  
/*

  ssl: { require: true, rejectUnauthorized: false } - 
  Bu seçenekler PostgreSQL'e SSL ile bağlanılmasını sağlar. 
  require: true ile PostgreSQL sunucusundan SSL gereksinimi olmadığını belirtir. 
  rejectUnauthorized: false ile de PostgreSQL sunucusunun SSL sertifikasının doğrulanmamasını sağlar. 
  Bu, genellikle yerel geliştirme ortamlarında kullanılır.

*/

module.exports = database;

