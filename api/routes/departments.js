const express = require('express');
const router = express.Router();
const department = require('../controllers/department');

const checkAuth = require('../middlewares/check-auth');

//GET request
router.get('/', department.getAll);

//POST request  PROTECTED ROUTE
router.post('/', checkAuth , department.addOne);

//GET:id request
router.get('/:id', department.getOne);

//PATCH:id request    PROTECTED ROUTE
router.patch('/:id', checkAuth , department.updateOne);

//DELETE:id request    PROTECTED ROUTE
router.delete('/:id', checkAuth , department.deleteOne);


module.exports = router;