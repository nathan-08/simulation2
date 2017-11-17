const express = require ('express')
const bodyParser = require ('body-parser')
const auth = require ('./controllers/auth_controller')
const properties = require ('./controllers/properties_controller')
const massive = require('massive')
require('dotenv').config();
const cors = require('cors')
const session = require('express-session');
const checkForSession = require('./middleware/checkForSession')


const app = express();
app.use(cors());
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}))
app.use(checkForSession);


app.post('/api/auth/login', auth.login)
app.post('/api/auth/register', auth.register)
app.post('/api/auth/logout', auth.logout)

app.post('/api/properties', properties.create)
app.get('/api/properties', properties.search)
app.delete('/api/properties/:id', properties.delete)
app.get('/api/properties/filter', properties.filter)

 



const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`Server listening on port ${port}.`))