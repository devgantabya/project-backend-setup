import type { Request, Response } from "express";

import { ProductService } from "./product.service";
import { ApiResponse } from "../../../utils/ApiResponse";
import catchAsync from "../../../utils/catchAsync";

// Create product
const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req.body);

  ApiResponse.success(res, result, "Product created successfully");
});

// Get all products
const products = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.products();

  ApiResponse.success(res, result, "Products retrieved successfully");
});

// Get single product
const product = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id || typeof id !== "string") {
    return ApiResponse.error(res, "Invalid product id", 400);
  }

  const result = await ProductService.product(id);

  ApiResponse.success(res, result, "Product retrieved successfully");
});

// Update product
const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id || typeof id !== "string") {
    return ApiResponse.error(res, "Invalid product id", 400);
  }

  const result = await ProductService.updateProduct(id, req.body);

  ApiResponse.success(res, result, "Product updated successfully");
});

// Delete product
const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id || typeof id !== "string") {
    return ApiResponse.error(res, "Invalid product id", 400);
  }

  const result = await ProductService.deleteProduct(id);

  ApiResponse.success(res, result, "Product deleted successfully");
});

export const ProductController = {
  createProduct,
  products,
  product,
  updateProduct,
  deleteProduct,
};