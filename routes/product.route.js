const { Router } = require("express");
const productController = require("../controllers/product.controller");
const imageMiddleware = require("../middleware/image");

const router = Router();

router.get("/products", productController.getProducts);
router.get("/product/:id", productController.getProduct);
router.post("/product", imageMiddleware.single("image"), productController.createProduct);
router.patch("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);
router.post(
  "/images",
  imageMiddleware.single("avatar"),
  productController.addProductImage
);

module.exports = router;
