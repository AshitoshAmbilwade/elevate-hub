import dotenv from "dotenv";
dotenv.config();

const config = {
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || "random-secret-key",
    accessExpirationMinutes: parseInt(process.env.JWT_ACCESS_EXPIRATION_MINUTES) || 30,
    verificationSecret: process.env.JWT_VERIFICATION_SECRET || "asfsdgdaasd-dje",
    verificationExpirationMinutes: parseInt(process.env.JWT_VERIFICATION_EXP_MINUTES) || 5,
  },

  // in future you can add:
  // db: { ... }
  // mail: { ... }
};

export default config;
