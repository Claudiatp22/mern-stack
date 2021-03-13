const express = require('express');
const router = express.Router();
const ImageController = require('../controllers/image.controller');

// Add a new Post
router.route('/images').post(ImageController.addImage);

module.exports = router;
