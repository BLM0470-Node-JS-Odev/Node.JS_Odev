const express = require('express');
const router = express.Router();
const student = require('../controllers/student');

//GET request
router.get('/', student.getAll);

//POST request
router.post('/', student.add);

//GET:id request
router.get('/:id', student.get);

//PATCH:id request
router.get('/:id', student.update);

//DELETE:id request
router.get('/:id', student.delete);

module.exports = router;