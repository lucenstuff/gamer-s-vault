import { DataTypes } from "sequelize";
import sequelize from "./database/sequelize.js";

const productScreenshots = sequelize.define(
  "ProductScreenshots",
  {
    ImageID: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
      allowNull: false,
    },
    ProductsID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: "Products",
        key: "ProductID",
      },
    },
    ImageURL: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default productScreenshots;
