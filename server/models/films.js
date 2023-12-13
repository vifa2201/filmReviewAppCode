const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  const filmSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    coverImage: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    reviews: [reviewSchema] // använd reviewSchema för att inkludera recensioner
  })

  module.exports = mongoose.model('Films', filmSchema)
  