"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
exports.register = register;
const authServices_1 = require("../services/authServices");
const userService_ts_1 = require("../services/userService.ts");
const errorUtils_ts_1 = require("../utils/errorUtils.ts");
function login(req, res) {
    const token = (0, authServices_1.createToken)(req.user_.id);
    res.status(200);
    res.json({ token, user: req.user_ });
    res.end();
}
async function register(req, res) {
    req.user_.password = await (0, userService_ts_1.generateHash)(req.user_.password);
    const result = await (0, userService_ts_1.newUser)(req.user_);
    if (!result) {
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return;
    }
    req.user_.id = result.id;
    login(req, res);
}
