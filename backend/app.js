import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express()

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());



// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

export default app;