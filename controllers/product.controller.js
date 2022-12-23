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
  getProduct: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const data = {
        ...req.body,
        image: req.file.filename,
      };
      const product = await Products.create(data);

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

  deleteProduct: async (req, res) => {
    try {
      const product = await Products.findByIdAndDelete(req.params.id);
      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addProductImage: async (req, res) => {
    try {
      if (req.file.path) {
        res.json(req.file.path);
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};

module.exports = productController;
