const express = require('express')
const database = require('./controllers/database')
const bodyParser = ('body-parser')

// Express API
let app = express()

// Middle ware 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.post('/places', require('./controllers/postPlaces'))

app.listen(5000, () => {
	console.log('Ready on port 5000')
})