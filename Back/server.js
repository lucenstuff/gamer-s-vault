import express from "express";
import cors from "cors";

import AuthController from "./controllers/authController.js";
import apiMessageController from "./controllers/apiMessageController.js";
import ProductController from "./controllers/productController.js";
import ShoppingCartController from "./controllers/shoppingCartController.js";

const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//Routes

app.get("/api/", apiMessageController.getMessage);
app.post("/api/signup", AuthController.signup);
app.post("/api/login", AuthController.login);
app.get("/api/products", ProductController.getAllProducts);
app.get("/api/products/:productId", ProductController.getProductById);
app.post("/api/addtocart/:id", ShoppingCartController.addToCart);
app.get("/api/getcart/:userId", ShoppingCartController.getUserCart);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server terminated");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server interrupted");
    process.exit(0);
  });
});
