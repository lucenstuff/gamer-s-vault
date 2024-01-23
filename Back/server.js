/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Sequelize, DataTypes } from "sequelize";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const requiredEnvVars = [
  "DB_USER",
  "DB_PASSWORD",
  "DB_DATABASE",
  "DB_HOST",
  "DB_PORT",
  "JWT_SECRET",
];

const app = express();
const port = process.env.PORT || 3000;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
}

app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = new Sequelize({
  dialect: "mysql",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

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

const Product = sequelize.define(
  "Products",
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
  },
  {
    tableName: "Products",
    timestamps: false,
  }
);

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

User.hasMany(ShoppingCart, { foreignKey: "UserID" });
ShoppingCart.belongsTo(User, { foreignKey: "UserID" });

ShoppingCart.hasMany(CartItem, { foreignKey: "CartID" });
CartItem.belongsTo(ShoppingCart, { foreignKey: "CartID" });

User.hasMany(Favorite, { foreignKey: "UserID" });
Favorite.belongsTo(User, { foreignKey: "UserID" });

Product.hasMany(Favorite, { foreignKey: "ProductID" });
Favorite.belongsTo(Product, { foreignKey: "ProductID" });

Product.hasMany(CartItem, { foreignKey: "ProductID" });
CartItem.belongsTo(Product, { foreignKey: "ProductID" });

Product.hasOne(Promotion, { foreignKey: "ProductID" });
Promotion.belongsTo(Product, { foreignKey: "ProductID" });

app.get("/api/", async (req, res) => {
  res.status(200).json({ message: "Welcome to the gamer's vault API!" });
});

app.post("/api/signup", cors(), async (req, res, next) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
      Username: username,
      Email: email,
      Password: hashedPassword,
      FirstName: firstName,
      LastName: lastName,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
});

app.post("/api/authenticate", cors(), async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { Email: email } });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.Password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        userId: user.UserID,
        email: user.Email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token, userId: user.UserID, expiresIn: 3600 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page, default is 1
    const limit = parseInt(req.query.limit) || 40; // Results per page, default is 10
    const offset = (page - 1) * limit; // Calculation of the offset

    const products = await Product.findAll({ limit, offset });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/products/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findByPk(productId);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/addtocart/:id", cors(), async (req, res) => {
  try {
    const productId = req.params.id;
    const { quantity, userId } = req.body;

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const activeCart = await ShoppingCart.findOne({
      where: {
        UserID: userId,
        CartStatus: "active",
      },
    });

    if (activeCart) {
      await CartItem.create({
        CartID: activeCart.CartID,
        ProductID: productId,
        Quantity: quantity || 1,
      });
    } else {
      const newCart = await ShoppingCart.create({
        UserID: userId,
        CartStatus: "active",
      });

      await CartItem.create({
        CartID: newCart.CartID,
        ProductID: productId,
        Quantity: quantity || 1,
      });
    }

    res.status(201).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/getcart/:userId", cors(), async (req, res) => {
  try {
    const userId = req.params.userId;

    const activeCart = await ShoppingCart.findOne({
      where: {
        UserID: userId,
        CartStatus: "active",
      },
    });

    if (!activeCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const cartItems = await CartItem.findAll({
      where: { CartID: activeCart.CartID },
      include: [
        { model: Product, attributes: ["ProductID", "ProductName", "Price"] },
      ],
      attributes: ["ProductID", "Quantity"],
    });

    res.status(200).json({ cartItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/userData", cors(), async (req, res) => {
  try {
    // const token = req.headers.authorization.split(" ")[1];
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…1NDh9.z3Lfmm5docvqTPhH9-cCh00xLz-T1awRNhLBvS1EpCI";
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    const userData = await User.findByPk(userId);
    res.json(userData);
    console.log(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error trying to get user data" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server terminated");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server interrupted");
    process.exit(0);
  });
});
