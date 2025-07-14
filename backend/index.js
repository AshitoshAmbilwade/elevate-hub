import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
const app = express()
const PORT = process.env.PORT || 5000;


// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

//routes



app.get('/', (req, res) => {
  res.send('✅ Backend is running!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
