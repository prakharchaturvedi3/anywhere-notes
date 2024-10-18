"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageRouter = void 0;
const express_1 = __importDefault(require("express"));
const authMiddleware_ts_1 = require("../middlewares/authMiddleware.ts");
const pageMiddleware_ts_1 = require("../middlewares/pageMiddleware.ts");
const pageController_ts_1 = require("../controllers/pageController.ts");
const pageService_ts_1 = require("../services/pageService.ts");
exports.pageRouter = express_1.default.Router();
exports.pageRouter.get("/", authMiddleware_ts_1.protect, pageController_ts_1.sendAllPages);
exports.pageRouter.post("/", authMiddleware_ts_1.protect, pageMiddleware_ts_1.pageDataValidaton, pageController_ts_1.createNewPage);
exports.pageRouter.get("/:id", authMiddleware_ts_1.protect, pageMiddleware_ts_1.pageAccess, pageController_ts_1.sendPage);
exports.pageRouter.put("/:id", authMiddleware_ts_1.protect, pageMiddleware_ts_1.pageAccess, pageMiddleware_ts_1.pageDataValidaton, pageService_ts_1.updatePage);
exports.pageRouter.delete("/:id", authMiddleware_ts_1.protect, pageMiddleware_ts_1.pageAccess, pageController_ts_1.removePage);
