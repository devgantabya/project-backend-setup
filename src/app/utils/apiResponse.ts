import { Response } from "express";
import { status } from 'http-status';

const success = (res: Response, data: any, message: string, statusCode: number = 200) => {
    return res.status(statusCode).json({
        success: "true",
        message: message,
        data: data
    });
};

export const ApiResponse = {
    success,
};