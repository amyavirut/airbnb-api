const mongoose = require('mongoose')

const Review = mongoose.model('review', {
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: "user" 
    },
    date: {
        type: date,
        default: Date.now
    },
    rating: {
        type: Number,
        default: 0,
    },
    content: {
        type: String,
        required: [true],
    }
})

module.exports = Review