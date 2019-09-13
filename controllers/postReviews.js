const Review = require('../models/review');
const Place = require('../models/place')

module.exports = (req, res) => {
    // First we try find the place, using the place id from the request
    Place.findById(req.body.place).then(place => {
        // If we found the place, then create the review
        Review.create(req.body).then(review => {
            // If the review was created succesfully then add to place.reviews and save
            place.reviews.push(review.id)
            place.save()
                // Send back review in response if place saved successfully
                .then(_ => res.send(review))
                // Otherwise return error if we couldn't save the place
                .catch(err => res.send(err))
        // Return error if we can't create the review
        }).catch(err => res.send(err))
    // Return error if we can't find the place
    }).catch(err => res.send(err))
}