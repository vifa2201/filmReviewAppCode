const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: false, // Gör recensioner frivilliga
  },
  comment: {
    type: String,
    required: false, // Gör recensioner frivilliga
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
});

module.exports = mongoose.model('Films', filmSchema);