import userService from '../services/auth.service.js';
import tokenService from '../services/token.service.js'; // ✅ Add this
import httpStatus from '../util/httpStatus.js';
//import generateAuthTokens from '../util/authToken.helper.js';
const signUp = async (req, res) => {
  const { name, email, password, username, role } = req.body;

  const user = await userService.createUser({
    name,
    email,
    password,
    username,
    role,
  });

  user.password = undefined;

  return res.status(httpStatus.created).json({
    message: "Account created successfully",
    user,
  });
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUserWithEmailAndPassword(email, password);

    const token = await tokenService.generateAuthTokens(user);
    user.password = undefined;

    return res.status(httpStatus.ok).json({
      message: "User signed in successfully",
      token,
      user,
    });
  } catch (error) {
    console.error("SignIn Error:", error.message || error);
    return res.status(httpStatus.internalServerError).json({
      message: "Sign in failed",
      error: error.message || "Internal server error",
    });
  }
};

export { signUp, signIn };
