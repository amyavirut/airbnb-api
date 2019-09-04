const express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.send('Welcome to Airbnb API')
})

app.listen(4000, () => {
	console.log('Ready on port 4000')
})