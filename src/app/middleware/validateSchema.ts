import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import httpStatus from "http-status";

const validateRequest = (schema: z.ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: result.error.issues[0]?.message || "Validation error",
      });
    }

    req.body = result.data;
    next();
  };
};

export default validateRequest;