
const express = require('express');
const router = express.Router(); // Usa express.Router() per creare il router
const dbController = require('../controller/DbController.js');

router.get('/', dbController.getFilms)


module.exports = router
