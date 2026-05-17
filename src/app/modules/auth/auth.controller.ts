import type { Request, Response } from "express";

import { AuthService } from "./auth.service";
import { ApiResponse } from "../../utils/ApiResponse";
import catchAsync from "../../utils/catchAsync";


const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  ApiResponse.success(res, result, "Login successful");
});

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);
  ApiResponse.success(res, result, "Registration successful");
});

const changePassword = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.changePassword(req.body);

  ApiResponse.success(res, result, "Password changed successfully");
});

const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.forgotPassword(req.body);

  ApiResponse.success(res, result, "Password reset email sent");
});

export const AuthController = {
  login,
  register,
  changePassword,
  forgotPassword,
};