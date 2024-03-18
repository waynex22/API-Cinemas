const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const languageSchema = new Schema({
  _id: { type: objectId, auto: true },
    content: { type: String, required: true },
}, {
  versionKey: false,
  timestamps: true
});

const Language = mongoose.model('languages', languageSchema);
module.exports = Language;
