import type { Request, Response } from "express";

import { AuthService } from "./auth.service";
import { ApiResponse } from "../../../utils/ApiResponse";
import catchAsync from "../../../utils/catchAsync";


const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  ApiResponse.success(res, result, "Login successful");
});

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);
  ApiResponse.success(res, result, "Registration successful");
});

const verifyEmail = catchAsync(async (req: Request, res: Response) => {
  const { token, email } = req.query;
  if (typeof token !== "string" || typeof email !== "string") {
    return ApiResponse.error(res, "Invalid token or email", 400);
  }
  const result = await AuthService.verifyEmail(token, email);
  ApiResponse.success(res, result, "Email verified successfully");
});


export const AuthController = {
  login,
  register,
  verifyEmail
};