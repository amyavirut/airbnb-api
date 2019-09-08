const express = require('express')
const database = require('./controllers/database')
const bodyParser = require('body-parser')

// Express API
let app = express()

// Middle ware 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.get('/places/:id', require('./controllers/getPlace'))
app.get('/types', require('./controllers/getTypes'))
app.post('/places', require('./controllers/postPlaces'))
app.post('/types', require('./controllers/postType'))
app.post('/users', require('./controllers/postUser'))
app.patch('/places/:id', require('./controllers/patchPlace'))
app.delete('/places/:id', require('./controllers/deletePlace'))

app.listen(5000, () => {
	console.log('Ready on port 5000')
})