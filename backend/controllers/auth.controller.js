import userService from '../services/auth.service.js';
import httpStatus from '../util/httpStatus.js';
import tokenService from '../services/token.service.js'
const signUp = async (req, res)=>{
    const [name, email, password,username, role]= req.body;
    const user= await userService.createUser({
        name,email,password,username,role,
    });
    user.password=undefined;
    return res.status(httpStatus.created).json({
        message:"Account created successfully",
        user,
    })
}

const signIn = async(req,res)=>{

}

export default{
    signIn,signUp
}