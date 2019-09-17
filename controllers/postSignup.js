const User = require('../models/user')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10

module.exports = (req, res) => {
    let user = req.body
    user.password = bcrypt.hashSync(user.password, SALT_ROUNDS)
    User.create(user).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}