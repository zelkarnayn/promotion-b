const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    image: String,
    name: String,
    model: String,
    price: Number,
    size: String,
    description: String,
    composition: String,
    color: String,
    amount: Number

  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
