const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    productId: String,
    count: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
