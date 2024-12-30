
const express = require('express');
const router = express.Router(); // Usa express.Router() per creare il router
const dbController = require('../controller/DbController.js');

router.get('/', dbController.getFilms)
router.get('/reviews/:id', dbController.getUserReviews)
router.get('/getUsers', dbController.getUsers)
router.post('/addreview', dbController.addReview)


module.exports = router
