// app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const movieRouter = require('./routers/movieRouter');
const reviewRouter = require('./routers/reviewRouter');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/movies", movieRouter);
app.use("/reviews", reviewRouter);

mongoose.connect("mongodb://localhost:27017/beest")
  .then(() => {
    console.log("Connected to the database");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
