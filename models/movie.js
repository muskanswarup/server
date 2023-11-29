// models/movie.js
const mongoose = require('mongoose');

const movieSchemaData = mongoose.Schema({
  movieId: Number,
  title: String,
  description: String,
  genre: String,
  releaseYear: Date,
});

const movieModel = mongoose.model("movie", movieSchemaData);

module.exports = movieModel;
