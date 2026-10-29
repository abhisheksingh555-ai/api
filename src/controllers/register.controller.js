import argon2 from "argon2";
import { User } from "../model/user.model.js";
import { accessToken } from "../utils/generateToken.js";
import { registerValidation } from "../validation/register.validation.js";

export const register = async (req, res) => {
  try {
    const result = registerValidation.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const { username, email, password, phone } = result.data;

    const existingUser = await User.findOne({
      $or: [{ email }, { username }, { phone }],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email, username, or phone number already exists",
      });
    }

    const hashedPassword = await argon2.hash(password);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
    });

    const token = accessToken(user);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email, username, or phone number already exists",
      });
    }

    console.error("Register error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
