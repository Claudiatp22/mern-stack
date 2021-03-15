const express = require('express');
const router = express.Router();

const users = require('./user.routes');
const posts = require('./post.routes');
const images = require('./image.routes');

router.use('/users', users);
router.use('/posts', posts);
router.use('/images', images);

module.exports = router;
