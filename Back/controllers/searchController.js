import { Op } from "sequelize";
import Product from "../database/models/product.js";

const SearchController = {
  search: async (req, res) => {
    try {
      const { q } = req.query;
      const products = await Product.findAll({
        where: {
          ProductName: {
            [Op.like]: `%${q}%`,
          },
        },
      });

      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },
};

export default SearchController;
