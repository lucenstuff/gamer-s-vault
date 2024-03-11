import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../database/models/user.js";
import dotenv from "dotenv";
dotenv.config();

class AuthController {
  static async signup(req, res) {
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
  }

  static async login(req, res) {
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
        // eslint-disable-next-line no-undef
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
  }
}

export default AuthController;
