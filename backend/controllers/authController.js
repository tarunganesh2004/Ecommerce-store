import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { createUser, findUserByEmail } from "../models/userModel.js";

dotenv.config();

// ✅ If JWT_SECRET is not in .env, generate a default key
const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key_123";

export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await findUserByEmail(email);
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Create new user
        await createUser(username, email, password);
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user in database
        const user = await findUserByEmail(email);
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // ✅ Generate JWT Token
        const token = jwt.sign({ userId: user.id,username:user.username }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ token, message: "Login successful" });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
