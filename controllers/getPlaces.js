const Place = require('../models/place');

module.exports = (req, res) => {
  Place.find(req.query)
  .populate('type')
  .populate('host')
  .populate('amenities')
  .populate('reviews')
  .lean()
  .then(data => {
    res.send(data.map(place => {
      place.image = place.images[0]
      delete place.images
      place.reviews = place.reviews.length
      return place
    }))
  }).catch(err => {
      res.send(err)
  })
}
