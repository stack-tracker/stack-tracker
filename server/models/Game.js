const { Schema, Types } = require('mongoose');

const gameSchema = new Schema(
  {
    gameId: {
      type: Schema.Types.ObjectId,
      default: () => Types.ObjectId()
    },
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
    small_blind: {
      type: Number,
      required: true,
    },
    big_blind: {
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

module.exports = gameSchema;
