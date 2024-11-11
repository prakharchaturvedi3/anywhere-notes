import type { NextFunction } from "express-serve-static-core";
import { createToken } from "../services/authServices.js";
import { generateHash, newUser } from "../services/userService.js";
import type { Request, Response } from "express";

export function login(req: Request, res: Response) {
  const token = createToken(req.body.user_.id);
  res.status(200);
  res.json({ token, user: req.body.user_ });
  res.end();
}

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    req.body.user_.password = await generateHash(req.body.user_.password);
    const result = await newUser(req.body.user_);
    if (!result) {
      throw new Error("User couldn't be Crated");
    }
    req.body.user_.id = result.id;
    login(req, res);
  } catch (err) {
    return next(err);
  }
}
