const User = require('../models/user');
const cuid = require('cuid');
const sanitizeHtml = require('sanitize-html');

/**
 * Save a user
 * @param req
 * @param res
 * @returns void
 */
addUser = async (req, res) => {
  if (!req.body.user.email || !req.body.user.password) {
    res.status(403).end();
  }

  const newUser = new User(req.body.user);
  newUser.comparePassword(req.body.user.password, (err) => {
    if (err) throw err;
  })

  // Let's sanitize inputs
  newUser.email = sanitizeHtml(newUser.email);
  newUser.userName = sanitizeHtml(newUser.userName);

  newUser.cuid = cuid();
  newUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
};

/**
 * Get a single user
 * @param req
 * @param res
 * @returns user
 */
getUser = async (req, res) => {
  User.findOne({ cuid: req.params.cuid }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
};

module.exports = {
  addUser,
  getUser
};
