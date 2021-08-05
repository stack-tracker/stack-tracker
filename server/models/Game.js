const { Schema, Types } = require("mongoose");

const gameSchema = new Schema(
  {
    location: {
      type: String,
      required: true,
      trim: true,
    },
    hours: {
      type: Number,
      required: true,
    },
    small_blind: {
      type: Number,
      required: true,
    },
    big_blind: {
      type: Number,
      required: true,
    },
    buy_in: {
      type: Number,
      required: true,
    },
    cash_out: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

gameSchema.virtual("result").get(function () {
  const result = this.cash_out - this.buy_in;
  return result.toFixed(2);
});

gameSchema.virtual("cash_per_hour").get(function () {
  const cashPerHour = this.result / this.hours;
  return cashPerHour.toFixed(2);
});

gameSchema.virtual("bb_per_hour").get(function () {
  const bbPerHour = this.result / this.big_blind / this.hours;
  return bbPerHour.toFixed(2);
});

gameSchema.virtual("total_results").get(function () {
  const totalResult = this.result;
  return totalResult.toFixed(2);
});

module.exports = gameSchema;
