export interface SuccessResponse {
    res: Response;
    data: any;
    message: string;
    statusCode: number;
}

export interface ErrorResponse {
    success: boolean;
    message: string;
    error?: string;
    stack?: string;
}