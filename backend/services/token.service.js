import jwt from 'jsonwebtoken';
import moment from 'moment';
import config from '../config/index.js'; // ✅ make sure to use full path with .js if using ES Modules

// 🔐 Generate a signed JWT token
const generateToken = (userId, expires, secret) => {
  const payload = {
    _id: userId,
    iat: moment().unix(),        // issued at
    exp: expires.unix(),         // expiration
  };

  return jwt.sign(payload, secret);
};

// 🧾 Generate access token for user
const generateAuthToken = async (user) => {
  const accessTokenExpires = moment().add(
    config.jwt.accessExpirationMinutes,
    'minutes'
  );

  const accessToken = generateToken(
    user._id,
    accessTokenExpires,
    config.jwt.accessSecret
  );

  return accessToken;
};

// 📩 Generate verification token for email verification
const generateVerificationToken = async (userId) => {
  const verificationTokenExpires = moment().add(
    config.jwt.verificationExpirationMinutes,
    'minutes'
  );

  const verificationToken = generateToken(
    userId,
    verificationTokenExpires,
    config.jwt.verificationSecret 
  );

  return verificationToken;
};

const verifyToken = async(token, secret)=>{
    if(secret==='accessToken'){
        return await jwt.verify(token,config.jwt.accessSecret);

    }
    else if(secret==="verify"){
            return await jwt.verify(token,config.jwt.verificationSecret)
    }
}

// ✅ Export functions
export default{
  generateAuthToken,
  generateVerificationToken,
  verifyToken
};
