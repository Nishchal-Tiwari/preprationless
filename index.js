const express = require('express');
const app = express();
const db_connect = require('./db_connect')
const cors = require('cors')
const session = require('express-session')
const parser = require('cookie-parser');
const profile = require('./profile')
const colleges = require('./colleges');
const login = require('./login');
const register = require('./register');

app.use(session({
    key: "uid",
    secret: "0xC345$%^&ewfwfwaae#$%^&*SDFGHJKNBVCFDRGTHJM",
    resave: false,
    saveUninitialized: true,


}))

app.use(cors({ credentials: true, origin: 'http://localhost:5501' }))
db_connect('test');
const upload = require('./upload');
app.use(express.static('front'))
app.use(express.json());
app.use(parser())
app.use('/login', login)
app.use('/register', register)
app.use('/upload', upload);
app.use('/', colleges);
app.use('/profile', profile)

app.get('/logout', (r, rs) => {
    r.session.destroy()
    rs.redirect("http://localhost:3000")
})
app.listen(process.env.port || '3000', () => console.log('server started'))