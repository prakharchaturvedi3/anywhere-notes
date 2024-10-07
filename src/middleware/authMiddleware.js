import { error } from "../utils/error.js";
import {
  freeEmail,
  matchPassword,
  serchUser,
} from "../services/authService.js";
import { validEmail, validName, validPassword } from "../utils/validation.js";

export function singupFeildValidation(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  if (!validEmail(email)) {
    error("INVALID EMAIL", req, res);
    return;
  }
  if (!validPassword(password)) {
    error("INVALID PASSWORD", req, res);
    return;
  }
  if (!validName(name)) {
    error("INVALID NAME", req, res);
    return;
  }
  console.log(".");
  next();
}

export async function newEmail(req, res, next) {
  const result = await freeEmail(req.body.email);
  if (!result) {
    error("EMAIL ALREADY IN USE", req, res);
    return;
  }
  next();
}

export function loginFeildValidation(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  if (!validEmail(email)) {
    error("INVALID EMAIL", req, res);
    return;
  }
  if (!validPassword(password)) {
    error("INVALID PASSWORD", req, res);
    return;
  }
  next();
}

export async function findUser(req, res, next) {
  const email = req.body.email;
  const result = await serchUser(email);
  if (!result) {
    error("USER DOESN'T EXISTS", req, res);
    return;
  }
  req._user = result;
  next();
}

export async function verifyCredentials(req, res, next) {
  const password = req.body.password;
  const result = await matchPassword(password, req._user.password);
  if (!result) {
    error("INVALID CREDENTIALS", req, res);
    return;
  }
  next();
}
