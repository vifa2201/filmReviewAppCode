const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    rating: {
      type: Number,
      required: false
    },
    comment: {
      type: String,
      required: false
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
    }
  })

  module.exports = mongoose.model('Films', filmSchema)
  