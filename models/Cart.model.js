const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    productId: String,
    count: {
      type: Number,
      default: 1
    }
  });

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
