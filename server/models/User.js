const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/]
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  }

});

const User = model('User') = mongoose.model('User', userSchema);

module.exports = User;