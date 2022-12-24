const Cart = require("../models/Cart.model");

module.exports.cartController = {
  getFullCart: async (req, res) => {
    try {
      const cart = await Cart.find();
      res.json(cart);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addCartItem: async (req, res) => {
    try {
      const cart = await Cart.create(req.body);
      res.json(cart);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  deleteCartItem: async (req, res) => {
    try {
      const cart = await Cart.findOneAndRemove({productId: req.params.id});
      res.json(cart);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  changeCart: async (req, res) => {
    const {type, count} = req.body
    try {
      if (type.toString() == 'minus' ) {
        const cart = await Cart.findByIdAndUpdate(req.params.id, {
          count: count
        }, {new: true})
        res.json(cart)
      } else if (type.toString() == 'plus' ) {
        const cart = await Cart.findByIdAndUpdate(req.params.id, {
          count: count
        }, {new: true})
        res.json(cart)
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  }
};
