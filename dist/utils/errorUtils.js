"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = handleError;
function handleError(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error(`[Error] ${statusCode}: ${message}`);
    res.status(statusCode);
    res.json({ success: false, message });
    next();
}
