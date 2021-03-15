const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Get one User by cuid
router.route('/:cuid').get(UserController.getUser);

// Add a new User
router.route('/').post(UserController.addUser);

module.exports = router;
