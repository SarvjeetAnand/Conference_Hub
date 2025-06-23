const mongoose = require('mongoose');

const conferenceSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  location: String,
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Conference', conferenceSchema);