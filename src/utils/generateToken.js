import env from "../config/env.js";
import jwt from "jsonwebtoken";

export const accessToken = (user) => {
  return jwt.sign(
    { userId: user._id.toString() },
    env.JWT_SECRET,
    {
      expiresIn: env.JWT_EXPIRES_IN,
    }
  );
};
