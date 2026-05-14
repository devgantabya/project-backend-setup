import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../types";
import { env } from "../config/env";

const globalErrorHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    const errResponse: ErrorResponse = {
        success: false,
        message: message,
    }

    if (env.node_env === "development") {
        errResponse.error = err;
        errResponse.stack = err.stack;
    }
    res.status(statusCode).json(errResponse);
}

export default globalErrorHandler;