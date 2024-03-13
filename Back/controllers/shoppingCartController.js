import ShoppingCart from "../database/models/shoppingCarts.js";
import CartItem from "../database/models/cartItems.js";
import Product from "../database/models/product.js";

class ShoppingCartController {
  static async addToCart(req, res) {
    try {
      const productId = req.params.id;
      const { quantity, userId } = req.body;

      const product = await Product.findByPk(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      const activeCart = await ShoppingCart.findOne({
        where: {
          UserID: userId,
          CartStatus: "active",
        },
      });

      if (activeCart) {
        await CartItem.create({
          CartID: activeCart.CartID,
          ProductID: productId,
          Quantity: quantity || 1,
        });
      } else {
        const newCart = await ShoppingCart.create({
          UserID: userId,
          CartStatus: "active",
        });

        await CartItem.create({
          CartID: newCart.CartID,
          ProductID: productId,
          Quantity: quantity || 1,
        });
      }

      res.status(201).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getUserCart(req, res) {
    try {
      const userId = req.params.userId;

      const activeCart = await ShoppingCart.findOne({
        where: {
          UserID: userId,
          CartStatus: "active",
        },
      });

      if (!activeCart) {
        return res.status(404).json({ error: "Cart not found" });
      }

      const cartItems = await CartItem.findAll({
        where: { CartID: activeCart.CartID },
        include: [
          { model: Product, attributes: ["ProductID", "ProductName", "Price"] },
        ],
        attributes: ["ProductID", "Quantity"],
      });

      res.status(200).json({ cartItems });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default ShoppingCartController;
