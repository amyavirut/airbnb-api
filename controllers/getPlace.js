const Place = require('../models/place');

module.exports = (req, res) => 
  Place.findOne({_id:req.params.id})
  .populate('type')
  .populate('host','name avatar')
  .populate('amenity')
  .then(data => {
    res.send(data)
  }).catch(err => {
      res.send(err)
  })