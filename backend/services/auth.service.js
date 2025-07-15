import UserModel from "../models/user.model";
import ApiError from "../helper/apiError";
import httpStatus from "../util/httpStatus";

const createUser = async(data)=>{
    return await UserModel.create(data);
}

export default {
  createUser,
};
