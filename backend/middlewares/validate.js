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
//used to validate joi schema
const validate = (schema, source = validationSource.BODY) => {
  return (req, res, next) => {
    try {
      const { error } = schema.validate(req[source]);
      if(!error) return next();
      const {details} = error;
      const message= details.map((i)=>i.message.replace(/['"]+/g,"")).join(",");
      console.log(message);
      next (new ApiError(httpStatus.badRequest, message))
      
    } catch (error) {
      next(error)
    }
  };
};

export default validate;
