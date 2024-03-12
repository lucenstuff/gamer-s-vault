import productScreenshots from "../database/models/productScreenshot.js";

const productScreenshotsController = {
  createProductScreenshot: async (req, res) => {
    try {
      const { ImageID, ProductsID, ImageURL } = req.body;
      const newProductScreenshot = await productScreenshots.create({
        ImageID,
        ProductsID,
        ImageURL,
      });
      res.status(201).json(newProductScreenshot);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getProductScreenshotsByProductId: async (req, res) => {
    try {
      const { ProductsID } = req.params;
      const screenshots = await productScreenshots.findAll({
        where: { ProductsID },
      });
      if (screenshots.length === 0) {
        return res.status(404).json({
          message: "No Product Screenshots found for the provided Product ID",
        });
      }
      res.json(screenshots);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getProductScreenshot: async (req, res) => {
    try {
      const { ImageID } = req.params;
      const screenshot = await productScreenshots.findByPk(ImageID);
      if (!screenshot) {
        return res
          .status(404)
          .json({ message: "Product Screenshot not found" });
      }
      res.json(screenshot);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a Product Screenshot by ImageID
  updateProductScreenshot: async (req, res) => {
    try {
      const { ImageID } = req.params;
      const { ProductsID, ImageURL } = req.body;
      const updated = await productScreenshots.update(
        { ProductsID, ImageURL },
        { where: { ImageID } }
      );
      if (updated[0] === 0) {
        return res
          .status(404)
          .json({ message: "Product Screenshot not found" });
      }
      res.json({ message: "Product Screenshot updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a Product Screenshot by ImageID
  deleteProductScreenshot: async (req, res) => {
    try {
      const { ImageID } = req.params;
      const deleted = await productScreenshots.destroy({ where: { ImageID } });
      if (deleted === 0) {
        return res
          .status(404)
          .json({ message: "Product Screenshot not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default productScreenshotsController;
