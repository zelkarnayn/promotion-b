const Cart = require("../models/Cart.module");

module.exports.cartController = {
  getCart: async (req, res) => {
    try {
      const cart = await Cart.find();
      res.json(cart);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  addToCart: async (req, res) => {
    try {
      const cart = await Cart.create(req.body);
      res.json(cart);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  deleteCart: async (req, res) => {
    try {
      const cart = await Cart.findByIdAndDelete({ productId: req.params.id });
      res.json(cart);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  updateCart: async (req, res) => {
    const { type, count } = req.body;
    try {
      if (type.toString() == "minus") {
        const cart = await Cart.findByIdAndUpdate(
          req.params.id,
          {
            count: count,
          },
          {
            new: true,
          }
        );
        res.json(cart);
      } else if (type.toString() == "plus") {
        const cart = await Cart.findByIdAndUpdate(
          req.params.id,
          {
            count: count,
          },
          {
            new: true,
          }
        );
        res.json(cart);
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
