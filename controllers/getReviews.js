const Review = require('../models/review');

module.exports = (req, res) => {
  Review.find(req.query).populate('author')
  .then(data => {
    res.send(data)
  }).catch(err => {
      res.send(err)
  })
}
