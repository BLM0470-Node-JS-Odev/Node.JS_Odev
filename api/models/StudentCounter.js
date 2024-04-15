const Sequelize = require('sequelize');

const sequelize = require('../database');

const StudentDepartment = sequelize.define('department', {
    count: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = StudentDepartment;