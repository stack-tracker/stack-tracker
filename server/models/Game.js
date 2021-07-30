const mongoose = require('mongoose');

const { Schema } = mongoose;

const GameSchema = new Schema(
  {
    location: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    hours: {
      type: Number,
      required: true
    },
    low_limit: {
      type: Number,
      required: true,
    },
    high_limit: {
      type: Number,
      required: true
    },
    buy_in: {
      type: Number,
      required: true
    },
    cash_out: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

GameSchema.virtual('result').get(function() {
  const result = this.cash_out - this.buy_in;
  return result;
});

GameSchema.virtual('cash_per_hour').get(function() {
  const cashPerHour = this.result / this.hours;
  return cashPerHour;
});

GameSchema.virtual('bb_per_hour').get(function() {
  const bbPerHour = this.cash_per_hour / this.high_limit;
  return bbPerHour;
});

const Game = model('Game', GameSchema);

module.exports = Game;
