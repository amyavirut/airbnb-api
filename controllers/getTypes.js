const Type = require('../models/type');

module.exports = (req, res) => {
  Type.find(req.query)
  .then(data => {
    res.send(data)
  }).catch(err => {
      res.send(err)
  })
}
