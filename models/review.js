// models/review.js
const mongoose = require('mongoose');

const reviewSchemaData = mongoose.Schema({
  content: String,
  rating: Number,
  author: String,
  createdAt: String
}, {
  timestamps: true
});

const reviewModel = mongoose.model("review", reviewSchemaData);

module.exports = reviewModel;
