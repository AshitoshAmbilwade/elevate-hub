import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Replace this with your actual frontend URL
//const FRONTEND_URL = process.env.FRONTEND_URL || "https://your-frontend.vercel.app";

// Connect to MongoDB
connectDB();

// CORS Configuration
app.use(cors({
  origin: "*", // allow frontend domain
  credentials: true,    // allow cookies and headers like Authorization
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api", router);

// Test Route
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
