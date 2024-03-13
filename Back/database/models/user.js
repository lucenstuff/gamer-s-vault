import { DataTypes } from "sequelize";
import sequelize from "./database/sequelize.js";

const User = sequelize.define(
  "User",
  {
    UserID: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    Username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(255),
      unique: true,
    },
    FirstName: {
      type: DataTypes.STRING(255),
    },
    LastName: {
      type: DataTypes.STRING(255),
    },
  },

  {
    tableName: "Users",
    timestamps: false,
  }
);

export default User;
