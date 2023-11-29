const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to enable JSON body parsing

const PORT = process.env.PORT || 3000;

const reviewSchemaData = mongoose.Schema({
  content: String,
  rating: Number,
  author: String,
  createdAt: String
}, {
  timestamps: true
})
const reviewModel = mongoose.model("review" , reviewSchemaData);

const movieSchemaData = mongoose.Schema({
  movieId: Number,
  title: String,
  description: String,
  genre: String,
  releaseYear: Date,
  // reviews: 
})

const movieModel = mongoose.model("movie" , movieSchemaData);

app.get("/", (req, res) => {
  res.json({ message: "Server is running for movies" });
});

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

// Read operation for movies
app.get("/movies", async (req, res) => {
  try {
    const data = await movieModel.find({});
    res.json({ success: true, data: data });
  } catch (err) {
    res.status(500).send({ success: false, message: "Error fetching data" });
  }
});

// Create operation for movies
app.post('/movies/create', async (req, res) => {
  console.log(req.body);
  const data = new movieModel(req.body);
  await data.save();
  res.send({ success: true, message: "Data saved successfully" });
});

// Update operation for movies
app.put('/movies/update', async (req, res) => {
  console.log(req.body);
  const { movieId, ...rest } = req.body;

  try {
    const updatedMovie = await movieModel.findOneAndUpdate(
      { _id: movieId },
      { $set: rest },
      { new: true }
    );

    res.json({ success: true, message: "Data updated successfully", updatedMovie });
  } catch (err) {
    res.status(500).send({ success: false, message: "Error updating data" });
  }
});

// delete
app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id; // Correct parameter name

  console.log(id);

  try {
    const data = await userModel.deleteOne({ _id: id });
    res.send({ success: true, message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error deleting data" });
  }
});

// for reviews

// Read operation for reviews
app.get("/reviews", async (req, res) => {
  try {
    const data = await reviewModel.find({});
    res.json({ success: true, data: data });
  } catch (err) {
    res.status(500).send({ success: false, message: "Error fetching data" });
  }
});

// Create operation for reviews
app.post('/reviews/create', async (req, res) => {
  console.log(req.body);
  const data = new reviewModel(req.body);
  await data.save();
  res.send({ success: true, message: "Data saved successfully" });
});

// Update operation for reviews
app.put('/reviews/update', async (req, res) => {
  console.log(req.body);
  const { reviewId, ...rest } = req.body;

  try {
    const updatedReview = await reviewModel.findOneAndUpdate(
      { _id: reviewId },
      { $set: rest },
      { new: true }
    );

    res.json({ success: true, message: "Data updated successfully", updatedReview });
  } catch (err) {
    res.status(500).send({ success: false, message: "Error updating data" });
  }
});

// Delete operation for reviews
app.delete('/reviews/delete/:id', async (req, res) => {
  const id = req.params.id;

  console.log(id);

  try {
    const data = await reviewModel.deleteOne({ _id: id });
    res.send({ success: true, message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error deleting data" });
  }
});



