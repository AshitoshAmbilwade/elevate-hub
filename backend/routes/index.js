import express from "express";
import authRoutes from "./auth.route.js";
import homeRoutes from './home.route.js'

const router = express.Router();

// Register all route modules here
router.use("/", homeRoutes)
router.use("/auth", authRoutes); // final path: /api/auth/signup, /api/auth/signin



export default router;
