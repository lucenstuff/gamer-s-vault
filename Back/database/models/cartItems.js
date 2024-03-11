import { DataTypes } from "sequelize";
import sequelize from "./database/sequelize.js";

const CartItem = sequelize.define(
  "CartItems",
  {
    CartItemID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    CartID: { type: DataTypes.INTEGER, allowNull: false },
    ProductID: { type: DataTypes.INTEGER, allowNull: false },
    Quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "CartItems",
    timestamps: false,
  }
);

export default CartItem;
