const Image = require('../models/image');
const cuid = require('cuid');

/**
 * Save an image
 * @param req
 * @param res
 * @returns void
 */
addImage = async (req, res) => {
  if (!req.body.image.postId) {
    res.status(403).end();
  }
  const newImage = new Image(req.body.image);

  newImage.cuid = cuid();
  newImage.url = "";
  newImage.postId = req.body.image.postId;
  newImage.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
};

module.exports = {
  addImage
};
