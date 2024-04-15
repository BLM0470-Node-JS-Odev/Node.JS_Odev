const express = require('express');
const router = express.Router();
const student = require('../controllers/student');

//GET request
router.get('/', student.getAll);

//POST request
router.post('/', student.addOne);

//GET:id request
router.get('/:id', student.getOne);

//PATCH:id request
router.get('/:id', student.updateOne);

//DELETE:id request
router.get('/:id', student.deleteOne);

module.exports = router;