import express from 'express'
import authController from '../controllers/auth.controller.js';
import validate from '../middlewares/validate.js';
import asyncHandler from '../helper/asyncHandler.js';
import { signInValidation, signUpValidate } from "../validations/auth.validation.js";


const router = express.Router();

router.post("/signup",validate(signUpValidate ),asyncHandler(authController.signUp));

router.post("/signin",validate(signInValidation),asyncHandler(authController.signIn));


export default router;