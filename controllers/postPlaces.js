const Place = require('../models/place');

module.exports = (req, res) => 
    Place.create({
        title: "Unbelievable Infinite Pool",
        description: "Magic Place on Earth!",
        type: "Entire Villa",
        city: "Samui",
        country: "Thailand",
        price: 1000,
        guests: 4,
        bathrooms: 4
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })