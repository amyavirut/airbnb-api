const Place = require('../models/place');

module.exports = (req, res) => {
  Place.find(req.query).populate('type').populate('host')
  .then(data => {
    res.send(data)
  }).catch(err => {
      res.send(err)
  })
}
