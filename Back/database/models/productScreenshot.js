import sequelize from "./database/sequelize.js";

const ProductScreenshot = sequelize.define(
  "ProductScreenshot",
  {
    ImageID: {
      type: sequelize.CHAR(36),
      primaryKey: true,
      allowNull: false,
    },
    ProductsID: {
      type: Sequelize.CHAR(36),
      allowNull: false,
      references: {
        model: "Products",
        key: "ProductID",
      },
    },
    ImageURL: {
      type: Sequelize.STRING(500),
      allowNull: false,
    },
  },
  {
    tableName: "ProductScreenshots",
    timestamps: false,
  }
);

export default ProductScreenshot;
