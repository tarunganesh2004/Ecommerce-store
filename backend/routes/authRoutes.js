import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// 🛑 Protected route - Only logged-in users can access
router.get("/profile", protectRoute, (req, res) => {
    res.json({ message: "Welcome to your profile!", user: req.user });
});

export default router;
