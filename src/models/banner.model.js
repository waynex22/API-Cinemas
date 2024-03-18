const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const bannerSchema = new Schema({
  _id: { type: objectId, auto: true },
  name: { type: String, required: true },
  url: {type: String , required: true}
}, {
  versionKey: false,
  timestamps: true
});

const Banner = mongoose.model('banners', bannerSchema);
module.exports = Banner;
