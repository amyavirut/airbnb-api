const mongoose = require('mongoose')

const User = mongoose.model('user', {
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        select: false
    },
    location: {
        type: String, 
        required: [true, 'location is required']
    },
    avatar: {
        type: String,
        required: [true, 'picture is required'],
        default: 'https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/anonymous-512.png'
    }
})

module.exports = User