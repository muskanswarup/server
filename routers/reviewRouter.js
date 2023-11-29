// routers/reviewRouter.js
const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.get("/", reviewController.getAllReviews);
router.post('/create', reviewController.createReview);
router.put('/update', reviewController.updateReview);
router.delete('/delete/:id', reviewController.deleteReview);

module.exports = router;
