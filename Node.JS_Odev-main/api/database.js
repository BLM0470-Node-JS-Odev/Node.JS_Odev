//using dotenv module
require('dotenv').config();

//using ORM module
const Sequelize = require('sequelize');

//using file system module for ssl certificate reading
const fs = require('fs');

//credential usage with harcodeded is not true
const sequelize = new Sequelize('project', process.env.DB_DATABESE_USERNAME, process.env.DB_DATABESE_PASSWORD, {
    host: process.env.DB_DATABESE_HOST,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync('DigiCertGlobalRootCA.crt.pem').toString()
      }
    }
  });

module.exports = sequelize;