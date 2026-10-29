import { z } from "zod";

export const registerValidation = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username cannot exceed 30 characters"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Invalid email address")
    .max(254, "Email cannot exceed 254 characters"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password cannot exceed 128 characters"),

  phone: z
    .string()
    .trim()
    .regex(
      /^\+[1-9]\d{7,14}$/,
      "Enter a valid international phone number"
    ),
});
