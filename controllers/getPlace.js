const Place = require('../models/place');

module.exports = (req, res) => 
  Place.findOne({_id:req.params.id})
  .populate('type')
  .populate('host','name avatar')
  .populate('amenities')
  .populate('reviews')
  .then(place => {
    place.rating = place.reviews.reduce((rating, reviews) => 
        rating + reviews.rating, 0) / place.reviews.length
    res.send(place)
  }).catch(err => {
      res.send(err)
  })