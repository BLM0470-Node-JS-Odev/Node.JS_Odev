const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students');
const departmentsController = require('../controllers/departments');

router.get('/', studentsController.getStudents);

router.get('/', departmentsController.getDepartments);


module.exports = router;