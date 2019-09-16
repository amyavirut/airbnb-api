const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Setup env
// Takes all settings from .env file and adds them to process.env
// Which is an object of VAR = VALUE
require('dotenv').config()

// Connect to database
// We do this after dotenv because it needs to use settings from .env
require('./controllers/database')

// Express API
let app = express()
// Enable CORS with origin: *
// Allow all CORS requests from any domain
app.use(cors())

// Middle ware 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.get('/places/:id', require('./controllers/getPlace'))
app.post('/places', require('./controllers/postPlaces'))
app.patch('/places/:id', require('./controllers/patchPlace'))
app.delete('/places/:id', require('./controllers/deletePlace'))
app.get('/types', require('./controllers/getTypes'))
app.post('/types', require('./controllers/postType'))
app.get('/amenities', require('./controllers/getAmenities'))
app.post('/amenities', require('./controllers/postAmenities'))
app.get('/reviews', require('./controllers/getReviews'))
app.post('/reviews', require('./controllers/postReviews'))
app.post('/users', require('./controllers/postUser'))
app.post('/signup', require('./controllers/postSignup'))


app.listen(process.env.PORT, () => {
	console.log(`Listening on port: ${process.env.PORT}`) 
})