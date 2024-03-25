const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/', (req, res, next) => {
    res.send(database.authenticate());
});

module.exports = router;