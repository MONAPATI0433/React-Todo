const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true,unique: true },
  description: { type: String, required: true ,unique: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true,unique: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;