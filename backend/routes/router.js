
const express = require('express');
const router = express.Router(); // Usa express.Router() per creare il router
const dbController = require('../controller/DbController.js');

router.get('/', dbController.getFilms)
router.get('/reviews/:id', dbController.getUserReviews)
router.post('/addreview', dbController.addReview)


module.exports = router
