import detenv from "dotenv";

const config = {
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET ||"asdfghgfdsadfghgfds",
    refreshSecret: process.env.JWT_REFRESH_SECRET ||"refresh_token_secret_key",
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES|| 10,
    refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS|| 10,
  },
};

export default config;
