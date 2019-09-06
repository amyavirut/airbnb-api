const Place = require('../models/place');

module.exports = (req, res) => 
    Place.findByIdAndDelete(req.params.id, req.body)
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })