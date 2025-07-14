import express from 'express'
import authController from '../controllers/auth.controller';
import validate from '../middlewares/validate';
import asyncHandler from '../helper/asyncHandler'
import { signInValidation, signUpValidate } from "../validations/auth.validation";

const router = express.Router();

router("/signup", validate(signUpValidate))