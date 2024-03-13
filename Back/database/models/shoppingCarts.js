import { DataTypes } from "sequelize";
import sequelize from "./database/sequelize.js";

const ShoppingCart = sequelize.define(
  "ShoppingCarts",
  {
    CartID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    UserID: { type: DataTypes.INTEGER, allowNull: false },
    CartStatus: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "ShoppingCarts",
    timestamps: false,
  }
);

export default ShoppingCart;
