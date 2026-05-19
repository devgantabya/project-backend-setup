import type { Request, Response } from "express";

import { OrderService } from "./order.service";
import { ApiResponse } from "../../../utils/ApiResponse";
import catchAsync from "../../../utils/catchAsync";

// Create Order
const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.createOrder(req.body);
  ApiResponse.success(res, result, "Order created successfully");
});

// Get all orders
const getOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getOrders();
  ApiResponse.success(res, result, "Orders retrieved successfully");
});

// Get single order
const getOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || typeof id !== "string") {
    return ApiResponse.error(res, "Invalid order id", 400);
  }

  const result = await OrderService.getOrder(id);
  ApiResponse.success(res, result, "Order retrieved successfully");
});

// Update order
const updateOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || typeof id !== "string") {
    return ApiResponse.error(res, "Invalid order id", 400);
  }

  const result = await OrderService.updateOrder(id, req.body);
  ApiResponse.success(res, result, "Order updated successfully");
});

// Delete order
const deleteOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || typeof id !== "string") {
    return ApiResponse.error(res, "Invalid order id", 400);
  }

  const result = await OrderService.deleteOrder(id);
  ApiResponse.success(res, result, "Order deleted successfully");
});

export const OrderController = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};