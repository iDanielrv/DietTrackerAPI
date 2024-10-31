const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startWeight: { type: Number },
  currentWeight: { type: Number },
  goalWeight: { type: Number },
  startDate: { type: Date },
  endDate: { type: Date }
});

module.exports = mongoose.model('User', userSchema)