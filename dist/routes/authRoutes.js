"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const authController_ts_1 = require("../controllers/authController.ts");
const authMiddleware_ts_1 = require("../middlewares/authMiddleware.ts");
const express_1 = __importDefault(require("express"));
exports.authRouter = express_1.default.Router();
exports.authRouter.get("/login", authMiddleware_ts_1.registration, authController_ts_1.login);
exports.authRouter.get("/register", authMiddleware_ts_1.availability, authController_ts_1.register);
