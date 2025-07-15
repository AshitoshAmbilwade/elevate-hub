import userService from '../services/auth.service.js';
import httpStatus from '../util/httpStatus.js';

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
  // to be implemented
};

export { signUp, signIn };
