const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students');
const departmentsController = require('../controllers/departments');

// admin/add-student=> GET
router.get('/add-student', studentsController.getAddStudent);

// admin/add-student=> POST
router.post('/add-student', studentsController.postAddStudents);

// admin/add-department=> GET
router.get('/department-student', departmentsController.getAddDepartment);

// admin/add-department=> POST
router.post('/department-student', departmentsController.postAddDepartment);

module.exports = router;