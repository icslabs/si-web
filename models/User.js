const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create User Schema
const UserSchema = new Schema({
  nim: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

module.exports = User = mongoose.model('users', UserSchema);