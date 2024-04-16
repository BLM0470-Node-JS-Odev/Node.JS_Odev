const Sequelize = require('sequelize');

const sequelize = require('../database');

const StudentCounter = sequelize.define('StudentCounter', {
    count: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = StudentCounter;