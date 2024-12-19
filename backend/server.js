
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




// 

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            db.query('SELECT * from users WHERE username = ?', [username], async (err, result) => {

                if (err) throw done(err)

                const user = result[0] // da capire perchè --> result[0] e non result e basta <--- risposta: result e un array con un solo oggetto dentro, lo 0 serve a selezionare l'oggetto (l'utente completo in questo caso) e non l'array contente l'oggetto.
                if (!user) return done(null, false, { message: 'Incorrect user' })


                const isMatch = await bcrypt.compare(password, user.password) // ⬅️ possibile bug, oppure e da capire meeglio questa riga --> password è una chiave del oggetto user contentente le chiavi id, username, password, email.
                if (!isMatch) return done(null, false, { message: 'Incorrect password' })

                return done(null, user)
            })
        } catch (err) { return done(err) }
    }))


// Serializzazione del utente 
passport.use.serializeUser((user, done) => done(null, user.id))


// Deserializzazione del utente
passport.deserializeUser((id, done) => {
    db.query('SELECT * FROM users WHERE id =?', [id], (err, result) => {
        if (err) throw err
        done(null, result[0])
    })
})
// rotta per registrare l'utente
server.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Verifica se l'utente esiste già
        db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
            if (err) return res.status(500).json({ message: 'Errore interno del server' })

            if (results.length > 0) {
                return res.status(400).json({ message: 'Username già esistente' })
            }

            // Hashing della password
            const hashedPassword = await bcrypt.hash(password, 10)

            // Inserisci il nuovo utente nel database
            db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email], (err, results) => {
                if (err) return res.status(500).json({ message: 'Errore nella creazione dell\'utente' });
                res.status(201).json({ message: 'Utente creato con successo' });
            });
        });
    } catch (error) {
        res.status(500).json({ message: 'Errore durante la registrazione' })
    }
})


server.post('login', passport.authenticate('local', { session: false }), (req, res) => {
    // crea un token JWT

    const token = jwt.sign({ userId: req.user.id }, secret_key, { expiresIn: '1h' })
    res.json({ token })
})










server.get('/', router)




server.listen(port, () => {
    console.log(`Server is running at http://${host}:${port}`)
})






