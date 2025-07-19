import detenv from "dotenv";

const config = {
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET ||"asdfghgfdsadfghgfds",
    refreshSecret: process.env.JWT_REFRESH_SECRET ||"refresh_token_secret_key",
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES|| 10,
    refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS|| 10,
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME ||"drato8w9z",
    api_key: process.env.CLOUDINARY_API_KEY||"614139793819846",
    api_secret: process.env.CLOUDINARY_API_SECRET||"VyHQEY_GMqldR0l8kzhZDQha5lI",
  },
};

export default config;
