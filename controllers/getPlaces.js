const Place = require('../models/place');

// If we recieve these query parems:
// {max_price: 200, city: "Phuket"}
// We want to send the following query to MongoDB
// {price: {$lte: 200}, city: "Phuket"}
// If we get the query {price: 200, city: "Phuket"}
// We don't want to modify this query, because it contains no
// no special filters. i.e: max_price, min_guests, etc
let transformQuery = (requestQuery) => {
  console.log(requestQuery)
  if (requestQuery.max_price) {
    requestQuery.price = {$lte: requestQuery.max_price}
    delete requestQuery.max_price
  }
  if (requestQuery.min_rooms) {
    requestQuery.bedrooms = {$gte: requestQuery.min_rooms}
    delete requestQuery.min_rooms
  }
  if (requestQuery.min_guests) {
    requestQuery.guests = {$gte: requestQuery.min_guests}
    delete requestQuery.min_guests
  }
  return requestQuery
}

module.exports = (req, res) => {
  let transformedQuery = transformQuery(req.query)
  Place.find(transformedQuery)
    .populate('type')
    .populate('host')
    .populate('amenities')
    .populate('reviews')
    .lean()
    .then(data => {
      res.send(data.map(place => {
        place.image = place.images[0]
        delete place.images
        place.rating = place.reviews.reduce((rating, reviews) =>
          rating + reviews.rating, 0) / place.reviews.length
        place.reviews = place.reviews.length

        return place
      }))
    }).catch(err => {
      res.send(err)
    })
}