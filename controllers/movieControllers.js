// controllers/movieController.js
const movieModel = require('../models/movie');

const getAllMovies = async (req, res) => {
  try {
    const data = await movieModel.find({});
    res.json({ success: true, data: data });
  } catch (err) {
    res.status(500).send({ success: false, message: "Error fetching data" });
  }
};

const createMovie = async (req, res) => {
  console.log(req.body);
  const data = new movieModel(req.body);
  await data.save();
  res.send({ success: true, message: "Data saved successfully" });
};

const updateMovie = async (req, res) => {
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
};

const deleteMovie = async (req, res) => {
  const id = req.params.id;

  console.log(id);

  try {
    const data = await movieModel.deleteOne({ _id: id });
    res.send({ success: true, message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error deleting data" });
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
