const mongoose = require('mongoose');

// Define the shape of the data
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // Automatically adds the time they sent it
  }
});

module.exports = mongoose.model('Contact', ContactSchema);