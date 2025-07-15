import express from 'express';
import { signUp, signIn } from '../controllers/auth.controller.js';
import validate from '../middlewares/validate.js';
import asyncHandler from '../helper/asyncHandler.js';
import { signInValidation, signUpValidate } from "../validations/auth.validation.js";

const router = express.Router();

router.post("/signup", validate(signUpValidate), asyncHandler(signUp));
router.post("/signin", validate(signInValidation), asyncHandler(signIn));

export default router;

