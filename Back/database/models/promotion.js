import { DataTypes } from "sequelize";
import sequelize from "./database/sequelize.js";

const Promotion = sequelize.define(
  "Promotions",
  {
    PromotionID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ProductID: { type: DataTypes.INTEGER, allowNull: false },
    DiscountPercentage: { type: DataTypes.DECIMAL(5, 2), allowNull: false },
    StartDate: { type: DataTypes.DATE, allowNull: false },
    EndDate: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: "Promotions",
    timestamps: false,
  }
);

export default Promotion;
