import UserModel from "../models/user.model.js";
import ApiError from "../helper/apiError.js";
import httpStatus from "../util/httpStatus.js";

const createUser = async(data)=>{
    return await UserModel.create(data);
}

export default {
  createUser,
};
