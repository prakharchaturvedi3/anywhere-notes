import { login, register } from "../controllers/authController.js";
import { registrationCheck, emailAvailability } from "../middlewares/authMiddleware.js";
import express from "express";
export const authRouter = express.Router();
authRouter.get("/login", registrationCheck, login);
authRouter.get("/register", emailAvailability, register);
//# sourceMappingURL=authRoutes.js.map