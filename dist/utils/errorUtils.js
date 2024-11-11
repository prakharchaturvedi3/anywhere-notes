export function ErrorHandler(err, req, res, next) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
}
class CustomError extends Error {
    statusCode;
    status;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
class BadRequest extends CustomError {
    constructor(message) {
        super(400, message);
    }
}
class UnauthorizedRequest extends CustomError {
    constructor(message) {
        super(401, message);
    }
}
class ForbiddenRequest extends CustomError {
    constructor(message) {
        super(403, message);
    }
}
class four04Request extends CustomError {
    constructor(message) {
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
//# sourceMappingURL=errorUtils.js.map