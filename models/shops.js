const { Schema, model } = require('mongoose');

const shopsSchema = Schema(
  {
    name: {
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

const Shops = model('Shops', shopsSchema);

module.exports = { Shops };
