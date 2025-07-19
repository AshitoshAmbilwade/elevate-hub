import { v2 as cloudinary } from "cloudinary";
import config from "../config/index.js";
import {
  getUserById,
  updateUser,
  updateUserPhoto,
  updateUserProfile,
} from "../services/user.service.js";
import httpStatus from "../util/httpStatus.js";
import ApiError from "../helper/apiError.js";

// Configure Cloudinary
cloudinary.config(config.cloudinary);
console.log("Cloudinary config:", config.cloudinary);


export const uploadPhoto = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "user_photos",
      use_filename: true,
    });

    // Update user with new photo URL
    const updatedUser = await updateUserPhoto(req.user._id, result.secure_url);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Photo uploaded successfully",
      photoUrl: updatedUser.photoUrl,
    });
  } catch (error) {
    console.error("Error uploading photo:", error);
    res.status(500).json({ message: "Error uploading photo" });
  }
};

export const getUser = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const user = await getUserById(userId);

    if (!user) {
      return next(new ApiError(httpStatus.notFound, "User not found"));
    }

    res.status(httpStatus.ok).json({
      success: true,
      user,
    });
  } catch (error) {
    next(new ApiError(httpStatus.internalServerError, "Server Error"));
  }
};

export const updateUserProfileController = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const profileData = req.body;

    const updatedUser = await updateUserProfile(userId, profileData);

    if (!updatedUser) {
      return next(new ApiError(httpStatus.notFound, "User not found"));
    }

    res.status(httpStatus.ok).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    next(new ApiError(httpStatus.internalServerError, "Server Error"));
  }
};

export default {
  uploadPhoto,
  getUser,
  updateUserProfile: updateUserProfileController,
};
