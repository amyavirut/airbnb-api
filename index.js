const express = require('express')
const mongoose =require('mongoose')

let app = express()

app.get('/places', require('./controllers/getPlaces'))
app.get('/', require('./controllers/root'))
mongoose.connect('mongodb://localhost:27017/airbnb', {useNewUrlParser: true}, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('Connected to MongoDB')
	}
})

app.listen(5000, () => {
	console.log('Ready on port 5000')
})