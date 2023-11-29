// routers/movieRouter.js
const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get("/", movieController.getAllMovies);
router.post('/create', movieController.createMovie);
router.put('/update', movieController.updateMovie);
router.delete('/delete/:id', movieController.deleteMovie);

module.exports = router;
