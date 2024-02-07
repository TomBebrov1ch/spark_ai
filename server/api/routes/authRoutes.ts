import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import User from "@models/userModel"; // Adjust the import path as necessary

const JWT_SECRET

const router = express.Router();
const saltRounds = 10;

router.post("/register", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

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
});

router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})

        if (!user){
            return res.status(401).json({message: 'There is no user with this email. Authentication failed.'})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch){
            return res.status(401).json({message: 'Wrong password. Authentication failed'})
        }

    } 

});

export default router;
