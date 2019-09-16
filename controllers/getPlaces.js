const Place = require('../models/place');

// Transforms filters into MongoDB operators.
// Incoming HTTP Request (React/Postman) -> API (transformation happens here) -> DB
// i.e:
// Request query: {"minRooms":"4","maxPrice":"450","minGuests":"5"}
// Transformed query: {"price":{"$lte":"450"},"bedrooms":{"$gte":"4"},"guests":{"$gte":"5"}}
// Filter query params, like minRooms are removed from the transformed query
// Because MongoDB doesn't understand them, and the logic is in the operators
let transformQuery = (requestQuery) => {
  if (requestQuery.maxPrice) {
    requestQuery.price = {$lte: requestQuery.maxPrice}
    delete requestQuery.maxPrice
  }
  if (requestQuery.minRooms) {
    requestQuery.bedrooms = {$gte: requestQuery.minRooms}
    delete requestQuery.minRooms
  }
  if (requestQuery.minGuests) {
    requestQuery.guests = {$gte: requestQuery.minGuests}
    delete requestQuery.minGuests
  }
  return requestQuery
}

module.exports = (req, res) => {
  console.log(`Request query: ${JSON.stringify(req.query)}`)
  let transformedQuery = transformQuery(req.query)
  console.log(`Transformed query: ${JSON.stringify(transformedQuery)}`)
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