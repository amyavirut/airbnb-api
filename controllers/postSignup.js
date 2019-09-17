const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT_ROUNDS = 10

module.exports = (req, res) => {
    let user = req.body // {name: "Amy", password: "password"}
    user.password = bcrypt.hashSync(user.password, SALT_ROUNDS)
    User.create(user).then(data => {
        let token = jwt.sign(data, process.env.JWT_SECRET)
        res.send(token)
    }).catch(err => {
        res.send(err)
    })
}