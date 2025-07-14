import Joi from "joi";

// Joi is a library for validation purposes

const signUpValidate = Joi.object({
  name: Joi.string().required().trim(),
  username: Joi.string().required().trim(),
  email: Joi.string().email().required().trim(), // add .email() for proper format validation
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("mentor", "student").required(),
});

const signInValidation = Joi.object({
  email: Joi.string().email().required().trim(),
  password: Joi.string().min(6).required(),
});

// You can export like this:
export default {
  signInValidation,
  signUpValidate,
};

// OR if you prefer named exports:
// export { signInValidation, signUpValidate };
