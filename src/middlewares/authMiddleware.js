import { verifyToken } from "../services/authServices.js";
import {
  validEmail,
  validName,
  validPassword,
} from "../utils/validationUtils.js";
import { findUserByEmail } from "../services/userService.js";

export async function registration(req, res, next) {
  const { email, password } = req.body;

  try {
    if (!validEmail(email)) {
      throw new Error("Invalid Email");
    }
    if (!validPassword(password)) {
      throw new Error("Invalid Password");
    }
    const result = await findUserByEmail(email);
    if (!result) {
      throw new Error("User Not Found");
    }
    req.user_ = result;
  } catch (err) {
    return next(err);
  }
  next();
}

export function protect(req, res, next) {
  const claim = verifyToken(req.headers.authorization);
  if (!claim) {
    throw new Error("Please login Again!");
  }
  req.user_ = claim;
  next();
}

export async function availability(req, res, next) {
  const { email, password, name } = req.body;
  try {
    if (!validEmail(email)) {
      throw new Error("Invalid Email");
    }
    if (!validPassword(password)) {
      throw new Error("Invalid Password");
    }
    if (!validName(name)) {
      throw new Error("Invalid Name");
    }
    const result = await findUserByEmail(email);
    if (result) {
      throw new Error("User Already Exist");
    }
  } catch (err) {
    return next(err);
  }
  req.user_ = req.body;
  next();
}
