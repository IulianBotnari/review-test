
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
const passport = require('passport')
const LocalStrategy = require('local-strategy').Strategy
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const expressSession = require('express-session')




server.use(express.json())
server.use(cors())

const router = require('./routes/router.js')

// Database connection

const db = require('../backend/db/db.js')

const host = process.env.HOST

const port = process.env.PORT

console.log('ciccia');

server.get('/', router)

server.get('/test', (req, res) => {
    res.send('Welcome to the RESTful API')
})

server.listen(port, () => {
    console.log(`Server is running at http://${host}:${port}`)
})


