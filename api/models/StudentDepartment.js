const Sequelize = require('sequelize');

const sequelize = require('../database');

const StudentDepartment = sequelize.define('studentDepartment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    std_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dept_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = StudentDepartment;