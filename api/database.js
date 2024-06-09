//using ORM module
const Sequelize = require('sequelize');

//using file system module for ssl certificate reading
const fs = require('fs');

//credential usage with harcodeded is not true
const sequelize = new Sequelize('project', {
    host: 'node-app.postgres.database.azure.com',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync('DigiCertGlobalRootCA.crt.pem').toString()
      }
    }
  });

module.exports = sequelize;