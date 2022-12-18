const Products = require("../models/Product.model");

const productController = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find();
      res.json(products);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getproduct: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const product = await Products.create(req.body);
      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const product = await Products.findByIdAndUpdate(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  deleteproduct: async (req, res) => {
    try {
      const product = await Products.findByIdAndDelete(req.params.id);
      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};

module.exports = productController;
