const express = require('express');
const router = express.Router();
const student = require('../controllers/student');

const checkAuth = require('../middlewares/check-auth');

//GET request
router.get('/', student.getAll);

//POST request  PROTECTED ROUTE
router.post('/', checkAuth ,student.addOne);

//GET:id request
router.get('/:id', student.getOne);

//PATCH:id request   PROTECTED ROUTE
router.patch('/:id', checkAuth,student.updateOne);

//DELETE:id request  PROTECTED ROUTE
router.delete('/:id', checkAuth, student.deleteOne);

module.exports = router;