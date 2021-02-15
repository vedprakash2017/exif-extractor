const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  image_data: { type: String, required: true },
  exif: { type: String, required: true },
}, {
  timestamps: true,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
