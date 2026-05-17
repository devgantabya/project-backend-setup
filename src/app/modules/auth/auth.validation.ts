import z from "zod";

// const email = z.string().email("Invalid email format");
// const password = z.string().min(8, "Password must be at least 8 characters long");

// export const loginSchema = z.object({
//   email,
//   password,
// });

// export const registerSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   email,
//   password,
//   status: z.enum(["active", "inactive"]).default("active"),
// });

// export const changePasswordSchema = z.object({
//   currentPassword: password,
//   newPassword: password,
// });

// export const forgotPasswordSchema = z.object({
//   email,
// });

export const userRegisterValidationSchema = z.object({
  id: z.string().uuid().optional(), 
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, "Name must be at least 2 characters long"),

  email: z
    .email("Invalid email format"),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be at least 8 characters long"),

  age: z
    .number()
    .int("Age must be an integer")
    .positive("Age must be a positive number")
    .optional(),
});

export const userLoginValidationSchema = z.object({
  email: z
    .email("Invalid email format"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
});


export type UserRegister = z.inter<typeof userRegisterValidationSchema>;
export type UserLogin = z.inter<typeof userLoginValidationSchema>;