import { createToken } from "../services/authServices.js";
import { generateHash, newUser } from "../services/userService.js";
import { handleError } from "../utils/errorUtils.js";

export function login(req, res) {
  const token = createToken(req.user_.id);
  res.status(200);
  res.json({ token, user: req.user_ });
  res.end();
}

export async function register(req, res) {
  req.user_.password = await generateHash(req.user_.password);
  const result = await newUser(req.user_);
  if (!result) {
    handleError(err, req, res, next);
    return;
  }
  req.user_.id = result.id;
  login(req, res);
}
