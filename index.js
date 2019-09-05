const express = require('express')
const database = require('./controllers/database')

let app = express()

app.get('/places', require('./controllers/getPlaces'))
app.get('/', require('./controllers/root'))


app.listen(5000, () => {
	console.log('Ready on port 5000')
})