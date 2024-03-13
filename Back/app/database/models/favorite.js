import { DataTypes } from "sequelize";
import sequelize from "./database/sequelize.js";

const Favorite = sequelize.define(
  "Favorites",
  {
    FavoriteID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserID: { type: DataTypes.INTEGER, allowNull: false },
    ProductID: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "Favorites",
    timestamps: false,
  }
);

export default Favorite;
