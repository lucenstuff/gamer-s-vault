import express from "express";
import AuthController from "./controllers/authController.js";
import apiMessageController from "./controllers/apiMessageController.js";
import ProductController from "./controllers/productController.js";
import ShoppingCartController from "./controllers/shoppingCartController.js";

const router = express.Router();

// API message route
router.get("/api/", apiMessageController.getMessage);

// Authentication routes
router.post("/api/signup", AuthController.signup);
router.post("/api/login", AuthController.login);

// Product routes
router.get("/api/products", ProductController.getAllProducts);
router.get("/api/products/:productId", ProductController.getProductById);

// Shopping cart routes
router.post("/api/addtocart/:id", ShoppingCartController.addToCart);
router.get("/api/getcart/:userId", ShoppingCartController.getUserCart);

export default router;
