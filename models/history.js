const { Schema, model } = require('mongoose');

const historySchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    restaurant: {
      type: String,
      required: true,
    },
    dishes: {
      type: Array,
      required: true,
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
  },

  { timestamps: true, versionKey: false }
);

const History = model('History', historySchema);

module.exports = { History };
