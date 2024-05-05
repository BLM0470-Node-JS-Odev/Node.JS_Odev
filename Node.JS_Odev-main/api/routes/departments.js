const express = require('express');
const router = express.Router();
const department = require('../controllers/department');

//GET request
router.get('/', department.getAll);

//POST request
router.post('/' , department.addOne);

//GET:id request
router.get('/:id', department.getOne);

//PATCH:id request
router.patch('/:id', department.updateOne);

//DELETE:id request
router.delete('/:id', department.deleteOne);


module.exports = router;