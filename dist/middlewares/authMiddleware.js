"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = protect;
exports.access = access;
exports.registration = registration;
exports.availability = availability;
const authServices_ts_1 = require("../services/authServices.ts");
const pageService_ts_1 = require("../services/pageService.ts");
const errorUtils_ts_1 = require("../utils/errorUtils.ts");
const validationUtils_js_1 = require("../utils/validationUtils.js");
const userService_js_1 = require("../services/userService.js");
function protect(req, res, next) {
    const claim = (0, authServices_ts_1.verifyToken)(req.headers.authorization);
    if (!claim) {
        const err = {
            statusCode: 401,
            message: "Invalid Token",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return;
    }
    req.user_ = claim;
    next();
}
async function access(req, res, next) {
    const pid = req.params.id;
    const result = await (0, pageService_ts_1.findPageById)(pid);
    if (!result || result.userId !== req.user_.id) {
        const err = {
            statusCode: 400,
            message: "Unauthorized access",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return;
    }
    req.page_ = result;
    next();
}
async function registration(req, res, next) {
    console.log("Here");
    const { email, password } = req.body;
    if (!(0, validationUtils_js_1.validEmail)(email)) {
        const err = {
            statusCode: 400,
            message: "Invalid email",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return null;
    }
    if (!(0, validationUtils_js_1.validPassword)(password)) {
        const err = {
            statusCode: 400,
            message: "Invalid password",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return null;
    }
    const result = await (0, userService_js_1.findUserByEmail)(email);
    if (!result) {
        const err = {
            statusCode: 400,
            message: "User not found",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return null;
    }
    req.user_ = result;
    next();
}
async function availability(req, res, next) {
    const { email, password, name } = req.body;
    if (!(0, validationUtils_js_1.validEmail)(email)) {
        const err = {
            statusCode: 400,
            message: "Invalid email",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return null;
    }
    if (!(0, validationUtils_js_1.validPassword)(password)) {
        const err = {
            statusCode: 400,
            message: "Invalid password",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return null;
    }
    if (!(0, validationUtils_js_1.validName)(name)) {
        const err = {
            statusCode: 400,
            message: "Invalid name",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return null;
    }
    const result = await (0, userService_js_1.findUserByEmail)(email);
    console.log(result);
    if (result) {
        const err = {
            statusCode: 400,
            message: "User already exist",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return;
    }
    req.user_ = req.body;
    next();
}
