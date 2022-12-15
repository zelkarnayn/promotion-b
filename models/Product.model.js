const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    image: [],
    manufacturer: String,
    model: String,

    subCategory: [
      {
        Compound: String,

        model: [
          {
            type: String,
            colour: [
              {
                name: String,
                image: String,
              },
            ],
            size: [
              {
                val: Number,
                price: Number,
              },
            ],
          },
        ],
      },
    ],
    description: String,
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
