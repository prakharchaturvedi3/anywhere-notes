import { login, register } from "../controllers/authController.js";
import { registration, availability } from "../middlewares/authMiddleware.js";
import express from "express";

export const authRouter = express.Router();

authRouter.get("/login", registration, login);
authRouter.get("/register", availability, register);
