const { Schema, model } = require('mongoose');
const gameSchema = require('./Game');

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
  },
  games: [gameSchema]
});

const User  = model('User', userSchema);

module.exports = User;