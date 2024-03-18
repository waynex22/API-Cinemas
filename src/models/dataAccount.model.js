const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const dataAccountSchema = new Schema({
  _id: { type: objectId, auto: true },
  account_id: { type: objectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image_url: { type: String, required: true },
  role: { type: String, required: true, enum: ["Admin" , "User" , "SupperAdmin"], default: "User" },
}, {
  versionKey: false,
  timestamps: true
});

const DataAccount = mongoose.model('dataAccounts', dataAccountSchema);
module.exports = DataAccount;
