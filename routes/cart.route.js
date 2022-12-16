const { Router } = require("express");
const { cartController } = require("../controllers/cart.controller");

const router = Router();

router.get("/cart/get", cartController.getCart);
router.post("/cart/post", cartController.addToCart);
router.delete("/cart/delete/:id", cartController.deleteCart);
router.patch("/cart/patch/:id", cartController.updateCart);

module.exports = router;
