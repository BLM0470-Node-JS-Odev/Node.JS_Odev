const express = require('express');
const router = express.Router();
const department = require('../controllers/department');

//GET request
router.get('/', department.getAll);

//POST request
router.post('/', department.add);

//GET:id request
router.get('/:id', department.get);

//PATCH:id request
router.patch('/:id', department.update);

//DELETE:id request
router.delete('/:id', department.delete);


module.exports = router;