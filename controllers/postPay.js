const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = (req, res) => {
  stripe.charges.create({
    amount: req.body.amount * 100, // amount is cent so
    currency: 'usd',
    description: req.body.title,
    source: req.body.token
  }).then(data => {
    res.send(data)
  }).catch(err => {
    res.send(err)
  })
} 
