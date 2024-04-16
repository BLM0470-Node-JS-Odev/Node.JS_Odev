const Sequelize = require('sequelize');

const sequelize = require('../database');

const StudentDepartment = sequelize.define('StudentCounter', {
    count: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = StudentCounter;