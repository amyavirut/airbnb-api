const mongoose = require('mongoose')

const Place = mongoose.model('place', {
    title: {
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    type: {
        type: String,
        required: [true, 'type is required']
    },
    city: {
        type: String,
        required: [true, 'city is required']
    },
    country: {
        type: String,
        required: [true, 'country is required']
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    rating: {
        type: Number,
        default: 0,
    },
    guests: {
        type: Number,
        required: [true, 'guests is required']
    },
    bathrooms: {
        type: Number,
        required: [true, 'bathroom is required']
    },
})

module.exports = Place 
