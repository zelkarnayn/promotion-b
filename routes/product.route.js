const { Router } = require("express");
const productController = require("../controllers/product.controller");

const router = Router();

router.get("/products", productController.getProducts);
router.get("/product/:id", productController.getproduct);
router.post("/product", productController.createProduct);
router.patch("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteproduct);

module.exports = router;
