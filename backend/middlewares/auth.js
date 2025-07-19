import jwt from "jsonwebtoken";
import { getUserById } from "../services/user.service.js";
import ApiError from '../helper/apiError.js';
import httpStatus from '../util/httpStatus.js';

/* const protect = async (req, res, next) => {
  let token;

  // Check for Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new ApiError(
        httpStatus.unauthorized,
        "You are not logged in! Please login first"
      )
    );
  }

  try {
    const currentUser = await getUserById(decoded.id);
    if (!currentUser) {
      return next(
        new ApiError(
          httpStatus.unauthorized,
          "The user belonging to this token no longer exists"
        )
      );
    }

    req.user = currentUser; // Attach user to request
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return next(
      new ApiError(
        httpStatus.unauthorized,
        "You are not allowed or token is invalid"
      )
    );
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          httpStatus.forbidden,
          "You are not allowed"
        )
      );
    }
    next();
  };
}; */

// middlewares/auth.js
const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  
  if (!token) return next(new ApiError(401, "Login required"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const user = await getUserById(decoded._id); // changed from decoded.id to decoded._id
    if (!user) return next(new ApiError(401, "User not found"));
    req.user = user;
    next();
  } catch (err) {
    return next(new ApiError(401, "Invalid token"));
  }
};


const restrictTo = (...roles) => {
  return (req, res, next) => {
    // Role restriction is also disabled
    next();
  };
};


export default {
  protect,
  restrictTo,
};
