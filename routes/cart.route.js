const { Router } = require("express");
const { cartController } = require("../controllers/cart.controller")

const router = Router();

// Get full cart
router.get("/cart/get", cartController.getFullCart);

// Add item to the cart
router.post("/cart/post", cartController.addCartItem);

// Delete item from cart
router.delete("/cart/delete/:id", cartController.deleteCartItem);

// Change item from cart
router.patch('/cart/patch/:id', cartController.changeCart)

module.exports = router;
