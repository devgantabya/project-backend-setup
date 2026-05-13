import z from "zod";

const email = z.string().email("Invalid email format");
const password = z.string().min(8, "Password must be at least 8 characters long");

export const loginSchema = z.object({
  email,
  password,
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email,
  password,
  status: z.enum(["active", "inactive"]).default("active"),
});

export const changePasswordSchema = z.object({
  currentPassword: password,
  newPassword: password,
});

export const forgotPasswordSchema = z.object({
  email,
});