const mongoose = require('mongoose');
const { isStringLiteralOrJsxExpression, isStringLiteral } = require('typescript');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const movieSchema = new Schema({
  _id: { type: objectId, auto: true },
  title: { type: String, required: true },
  thumnail: { type: String, required: true },
  trailer: { type: String, required: true },
  director: { type: String, required: true },
  category_id: { type: String, required: true , ref: 'categories' },
  premiere: { type: String, required: true },
  time: { type: String, required: true },
  language_id: { type: String, required: true, ref: 'languages'},
  rated: { type: String, required: true },
  description: { type: String, required: true },
}, {
  versionKey: false,
  timestamps: true
});

const Movie = mongoose.model('movies', movieSchema);
module.exports = Movie;
