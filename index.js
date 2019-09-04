const express = require('express')
let app = express()

app.get('/places', require('./getPlaces'))
app.get('/', require('./root'))


app.listen(5000, () => {
	console.log('Ready on port 5000')
})