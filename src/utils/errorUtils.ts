import type {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction,
} from "express";

interface CustomErrorType extends ErrorRequestHandler {
  status?: string;
  statusCode?: number;
  message: string;
}

export function ErrorHandler(
  err: CustomErrorType,
  req: Request,
  res: Response,
  next: NextFunction
) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
}

class CustomError extends Error {
  statusCode: number;
  status: string;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

class BadRequest extends CustomError {
  constructor(message: string) {
    super(400, message);
  }
}
class UnauthorizedRequest extends CustomError {
  constructor(message: string) {
    super(401, message);
  }
}
class ForbiddenRequest extends CustomError {
  constructor(message: string) {
    super(403, message);
  }
}

class four04Request extends CustomError {
  constructor(message: string) {
    super(404, message);
  }
}

export const ErrorConstructors = {
  CustomError,
  BadRequest,
  UnauthorizedRequest,
  ForbiddenRequest,
  four04Request,
};
