const { Router } = require("express");
const productController = require("../controllers/product.controller");
const imageMiddleware = require ('../middleware/post.image')


const router = Router();

router.get("/products", productController.getProducts);
router.get("/product/:id", productController.getProduct);
router.post("/product", productController.createProduct); //imageMiddleware.single("image"), 
router.patch("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);
router.post("/images", productController.addProductImage); //imageMiddleware.single("avatar"),

module.exports = router;
