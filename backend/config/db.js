import mongoose from "mongoose";

mongoose.set("strictQuery", true); // ✅ Important setting

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`🗄️ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

// Track connection events (for learning and logging) for monitoring better debugging
//
mongoose.connection.on("connected", () => {
  console.log("🔗 Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.error(`❌ Mongoose connection error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("⚠️ Mongoose disconnected from DB");
});

// Optional: graceful shutdown for Ctrl+C
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("❎ Mongoose connection closed due to app termination");
  process.exit(0);
});

export default connectDB;
