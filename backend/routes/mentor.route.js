import express from 'express';
import mentorController from '../controllers/mentor.controller.js'
import asyncHandler from '../helper/asyncHandler.js';

const router= express.Router();
router.get("/", asyncHandler(mentorController.getAllMentors))
router.get("/:username",asyncHandler(mentorController.getMentorInfoByUsername));

export default router;