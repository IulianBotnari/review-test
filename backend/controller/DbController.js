const { response } = require('express');
const dbConnection = require('../db/db.js')

// get data from database




const getFilms = ('/', (req, res) => {
    dbConnection.query('SELECT * FROM films', (err, results) => {

        if (err) throw err;
        res.json(results);

    });
})

const getUserReviews = ('/reviews/:username', (req, res) => {
    console.log(req.params.username);

    const username = req.params.id
    console.log(username);

    dbConnection.query('SELECT films.title, reviews.review, reviews.vote FROM films JOIN reviews ON films.id = reviews.film_id WHERE reviews.username = ?', [username], (err, results) => {
        if (err) throw err;



        res.json(results)
        console.log(results);



    })

})




module.exports = {
    getFilms,
    getUserReviews
}