import express from "express";
import {
  findUser,
  loginFeildValidation,
  newEmail,
  singupFeildValidation,
  verifyCredentials,
} from "../middleware/authMiddleware.js";
import { loginUser, registerUser } from "../controllers/authController.js";
export const authRouter = express.Router();

authRouter.post("/register", singupFeildValidation, newEmail, registerUser);
authRouter.post("/login", loginFeildValidation, findUser, verifyCredentials, loginUser);
