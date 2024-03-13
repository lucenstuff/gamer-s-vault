import { DataTypes } from "sequelize";
import sequelize from "./database/sequelize.js";

const Product = sequelize.define(
  "Product",
  {
    ProductID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ProductName: { type: DataTypes.STRING, allowNull: false },
    Description: { type: DataTypes.TEXT },
    Price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    ImageURL: { type: DataTypes.STRING },
    isTrending: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    tableName: "Products",
    timestamps: false,
  }
);

export default Product;
