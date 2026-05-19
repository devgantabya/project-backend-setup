import type { Request, Response } from "express";

import { AuthService } from "./auth.service";
import { ApiResponse } from "../../../utils/ApiResponse";
import catchAsync from "../../../utils/catchAsync";


// using prisma
// const login = catchAsync(async (req: Request, res: Response) => {
//   const result = await AuthService.login(req.body);

//   ApiResponse.success(res, result, "Login successful");
// });

// const register = catchAsync(async (req: Request, res: Response) => {
//   const result = await AuthService.register(req.body);
//   ApiResponse.success(res, result, "Registration successful");
// });

// const verifyEmail = catchAsync(async (req: Request, res: Response) => {
//   const { token, email } = req.query;
//   if (typeof token !== "string" || typeof email !== "string") {
//     return ApiResponse.error(res, "Invalid token or email", 400);
//   }
//   const result = await AuthService.verifyEmail(token, email);
//   ApiResponse.success(res, result, "Email verified successfully");
// });

// using mongoose
const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);
  ApiResponse.success(res, result, "User created successfully");
})

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);
  ApiResponse.success(res, result, "Login successful");
});

const users = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.users();
  ApiResponse.success(res, result, "Users retrieved successfully");
});

const user = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  if (typeof id !== "string") {
    return ApiResponse.error(res, "Invalid user id", 400);
  }
  const result = await AuthService.user(id);
  ApiResponse.success(res, result, "User retrieved successfully");
})




export const AuthController = {
  login,
  register,
  users,
  user,
};