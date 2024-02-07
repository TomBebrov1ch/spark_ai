const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
import User from "@models/userModel";

const JWT_SECRET = process.env.JWT_SECRET;
const saltRounds = 10;

const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  console.log("password:", password);
  console.log("confirm password:", confirmPassword);

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  try {
    const hashedPassword = await bcryptjs.hash(password, saltRounds);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed. User not found." });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    console.log("password:", password);
    console.log("userPassword:", user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Wrong password." });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Logged in successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  register,
  login,
};
