const dbConnection = require('../db/db.js')

// get data from database

const getFilms = ('/', (req, res) => {
    dbConnection.query('SELECT * FROM films', (err, results) => {
        if (err) throw err;
        res.json(results);

    });
})

module.exports = {
    getFilms
}