import { ProductScreenshot } from "../database/models/productScreenshot.js";

class ScreenshotController {
  static async getScreenshots(req, res) {
    try {
      const productId = req.params.productId;
      const productScreenshots = await ProductScreenshot.findAll({
        where: { ProductsID: productId },
      });
      res.json(productScreenshots);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default ScreenshotController;
