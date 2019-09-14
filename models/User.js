const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  local: {
    email: String,
    password: String
  },
  google: {
    email: String,
    googleID: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
