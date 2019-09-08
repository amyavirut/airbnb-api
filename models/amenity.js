const mongoose = require('mongoose')

const Amenity = mongoose.model('amenity', {
    name: {
        type: String,
        required: [true, 'name is required']
    },
    icon: {
        type: String,
        required: [true, 'icon is required']
    }
})

module.exports = Amenity