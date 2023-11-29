// controllers/reviewController.js
const reviewModel = require('../models/review');

const getAllReviews = async (req, res) => {
  try {
    const data = await reviewModel.find({});
    res.json({ success: true, data: data });
  } catch (err) {
    res.status(500).send({ success: false, message: "Error fetching data" });
  }
};

const createReview = async (req, res) => {
  console.log(req.body);
  const data = new reviewModel(req.body);
  await data.save();
  res.send({ success: true, message: "Data saved successfully" });
};

const updateReview = async (req, res) => {
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
};

const deleteReview = async (req, res) => {
  const id = req.params.id;

  console.log(id);

  try {
    const data = await reviewModel.deleteOne({ _id: id });
    res.send({ success: true, message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error deleting data" });
  }
};

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
};

