import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key_123";

// Middleware to protect routes
export const protectRoute = (req, res, next) => {
    const token = req.header("Authorization");

    // Check if token is missing
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
        req.user = decoded;  // Attach user info to request
        next();  // Proceed to next middleware/controller
    } catch (error) {
        res.status(403).json({ message: "Invalid token." });
    }
};
