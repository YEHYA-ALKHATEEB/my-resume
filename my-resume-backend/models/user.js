// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  resume: {
    type: String,
  },
  profileImage: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
