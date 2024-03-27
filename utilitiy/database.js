const Sequelize = require('sequelize');
//database bağlantısı için sequelize npm kütüphanesini çağırdık.


const database = new Sequelize({
    database: "obstest",
    username: "superman",
    password: "G{gQqbX#,:^m[5Y's>f)",
    host: "node-app.postgres.database.azure.com",
    port: 5432,
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