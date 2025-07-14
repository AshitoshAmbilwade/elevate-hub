import Joi from "joi";
import httpStatus from "../util/httpStatus.js";
import ApiError from "../helper/apiError.js";

// Enum-like object for validation sources
export const validationSource = {
  BODY: "body",
  QUERY: "query",
  PARAM: "params",
  HEADER: "headers",
};

// Middleware function to apply Joi validation
const validate = (schema, source = validationSource.BODY) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[source]);
    if (error) {
      const message = error.details?.[0]?.message || "Validation Error";
      return next(new ApiError(httpStatus.BAD_REQUEST, message));
    }
    next();
  };
};

export default validate;
