const Sequelize = require('sequelize');

const sequelize = require('../database');

const Student = sequelize.define('student', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type:Sequelize.STRING,
        allowNull:false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    counter: Sequelize.INTEGER,
    deptid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Student;