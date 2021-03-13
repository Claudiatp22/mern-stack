const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Get one User by cuid
router.route('/users/:cuid').get(UserController.getUser);

// Add a new User
router.route('/users').post(UserController.addUser);

module.exports = router;
