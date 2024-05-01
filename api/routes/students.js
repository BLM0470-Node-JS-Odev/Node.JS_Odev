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
router.patch('/:id', student.updateOne);

//DELETE:id request
router.delete('/:id', student.deleteOne);

module.exports = router;