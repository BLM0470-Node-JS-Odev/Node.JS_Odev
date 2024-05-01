const Sequelize = require('sequelize');

const sequelize = require('../database');

const Department = sequelize.define('department', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deptstdid: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = Department;