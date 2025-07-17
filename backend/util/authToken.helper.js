import moment from 'moment';
import jwt from 'jsonwebtoken';
import config from '../config/index.js';

const generateToken=(userId,expires,secret)=>{
    const payload={
        _id:userId,
        iat:moment().unix(),
        exp:expires.unix(),
    };
    return jwt.sign(payload,secret)
};

 const generateAuthTokens=async(user)=>{
    const accessTokenExpires=moment().add(
        config.jwt.accessExpirationMinutes,
        "minutes"
    );
    const accessToken=generateToken(user._id,accessTokenExpires,config.jwt.accessSecret);
    return accessToken;
 } 

export default generateAuthTokens;
