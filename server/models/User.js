<<<<<<< HEAD
const { Schema, model } = require("mongoose");
const gameSchema = require("./Game");
=======
const { Schema, model } = require('mongoose');
const GameSchema = require('./Game');
>>>>>>> 0c9a2cd64c2a80b46a5a66e6b061a81cc93046cb

const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/],
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
<<<<<<< HEAD
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
=======
  games: [GameSchema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};



const User  = model('User', userSchema);
>>>>>>> 0c9a2cd64c2a80b46a5a66e6b061a81cc93046cb

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  console.log(this.password + " " + password);
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
