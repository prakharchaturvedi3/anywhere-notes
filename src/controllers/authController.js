import { createToken } from "../services/authServices.js";
import { generateHash, newUser } from "../services/userService.js";

export function login(req, res) {
  const token = createToken(req.user_.id);
  res.status(200);
  res.json({ token, user: req.user_ });
  res.end();
}

export async function register(req, res) {
  try {
    req.user_.password = await generateHash(req.user_.password);
    const result = await newUser(req.user_);
    if (!result) {
      throw new Error("User couldn't be Crated");
    }
    req.user_.id = result.id;
    login(req, res);
  } catch (err) {
    return next(err);
  }
}
