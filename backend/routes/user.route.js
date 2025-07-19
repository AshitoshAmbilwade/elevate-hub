// routes/user.route.js
import express from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.js';
import asyncHandler from '../helper/asyncHandler.js';
import validate from '../middlewares/validate.js';
import upload from '../middlewares/upload.js'; // ✅ THIS IS WHAT WAS MISSING
import  updateUserProfileValidation  from '../validations/user.validation.js';

const router = express.Router();

router.post(
  "/upload-photo",
  authMiddleware.protect,
  upload.single("photo"), // ✅ now defined
  asyncHandler(userController.uploadPhoto)
);

router.get(
  "/",
  authMiddleware.protect,
  asyncHandler(userController.getUser)
);

router.put(
  "/update-profile",
  authMiddleware.protect,
  validate(updateUserProfileValidation),
  asyncHandler(userController.updateUserProfile)
);

export default router;
