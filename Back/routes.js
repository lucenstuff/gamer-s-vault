import express from "express";
import AuthController from "./controllers/authController.js";
import apiMessageController from "./controllers/apiMessageController.js";
import ProductController from "./controllers/productController.js";
import ShoppingCartController from "./controllers/shoppingCartController.js";
import ScreenshotController from "./controllers/screenshotController.js";
import SearchController from "./controllers/searchController.js";

const router = express.Router();

// API message route
router.get("/api/", apiMessageController.getMessage);

// Authentication routes
router.post("/api/signup", AuthController.signup);
router.post("/api/login", AuthController.login);

// Product routes
router.get("/api/products", ProductController.getAllProducts);
router.get("/api/products/trending", ProductController.getTrendingProducts);
router.get("/api/products/:productId", ProductController.getProductById);

// Shopping cart routes
router.post("/api/addtocart/:id", ShoppingCartController.addToCart);
router.get("/api/getcart/:userId", ShoppingCartController.getUserCart);

// Game Screenshots
router.get(
  "/api/products/:ProductsID/screenshots",
  ScreenshotController.getProductScreenshotsByProductId
);

// Search

router.get("/api/search/products", SearchController.search);

// router.get("/api");

export default router;
