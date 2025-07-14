import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { use } from "react";

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true, // ensure no duplicate emails
  },

  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["student", "mentor"],
    default: "student",
  },
});

// Optional: hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

userSchema.index({ email: 1 });

const UserModel = model("User", userSchema);
export default UserModel;
