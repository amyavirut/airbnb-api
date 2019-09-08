const mongoose = require('mongoose')

const Type = mongoose.model('type', {
    name: {
        type: String,
        required: [true, 'name is required']
    }
})

module.exports = Type