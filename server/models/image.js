const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    cuid: { type: 'String', required: true },
    url: { type: 'String', required: true },
    postId: { type: 'String', required: true }
});

module.exports = mongoose.model('Image', imageSchema);
