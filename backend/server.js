
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const expressSession = require('express-session')
server.use(express.json())
server.use(cors())

const router = require('./routes/router.js')

// Database connection

const db = require('../backend/db/db.js')

const host = process.env.HOST

const port = process.env.PORT

const secret_key = process.env.SECRET_KEY

const users = []
db.query('SELECT * FROM users', (err, result) => {
    if (err) throw err

    users.push(...result)
    console.log(users);
})




console.log(users.map(user => user.username));

passport.use(expressSession({
    secret: secret_key,
    resave: false,
    saveUninitialized: false,
}))



server.get('/', router)

server.get('/test', (req, res) => {
    res.send('Welcome to the RESTful API')
})

server.listen(port, () => {
    console.log(`Server is running at http://${host}:${port}`)
})






