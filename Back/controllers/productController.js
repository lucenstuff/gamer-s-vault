import Product from "../database/models/product.js";
class ProductController {
  static async getAllProducts(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 42;
      const offset = (page - 1) * limit;

      const products = await Product.findAll({ limit, offset });
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getProductById(req, res) {
    try {
      const productId = req.params.productId;

      const product = await Product.findByPk(productId);

      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getTrendingProducts(req, res) {
    try {
      const products = await Product.findAll({
        where: {
          isTrending: true,
        },
      });

      if (products.length === 0) {
        return res.status(404).json({ message: "No trending products found" });
      }

      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default ProductController;
