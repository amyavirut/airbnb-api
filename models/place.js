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
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'type is required'],
        ref: "type"   
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
    bedrooms: {
        type: String,
        required: [true, 'bedrooms is required']
    },
    bathrooms: {
        type: Number,
        required: [true, 'bathroom is required']
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'host is required'],
        ref: "user" 
    },
    images: [{
        type: String,
        required: [true, 'images are required']
    }],
    amenities: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'amenities are required'],
        ref: "amenity"
    }],
    reviews: [{
        type:mongoose.Schema.Types.ObjectId,
        required: [true, 'reviews are required'],
        ref: "review"
    }]
})

module.exports = Place 
