import { verifyToken } from "../services/authServices.js";
import { findPageById } from "../services/pageService.js";
import { handleError } from "../utils/errorUtils.js";
import {
  validEmail,
  validName,
  validPassword,
} from "../utils/validationUtils.js";
import { findUserByEmail } from "../services/userService.js";

export function protect(req, res, next) {
  const claim = verifyToken(req.headers.authorization);
  if (!claim) {
    const err = {
      statusCode: 401,
      message: "Invalid Token",
    };
    handleError(err, req, res, next);
    return;
  }
  req.user_ = claim;
  next();
}

export async function access(req, res, next) {
  const pid = req.params.id;
  const result = await findPageById(pid);
  if (!result || result.userId !== req.user_.id) {
    const err = {
      statusCode: 400,
      message: "Unauthorized access",
    };
    handleError(err, req, res, next);
    return;
  }
  req.page_ = result;
  next();
}

export async function registration(req, res, next) {
  console.log("Here");
  const { email, password } = req.body;
  if (!validEmail(email)) {
    const err = {
      statusCode: 400,
      message: "Invalid email",
    };
    handleError(err, req, res, next);
    return null;
  }
  if (!validPassword(password)) {
    const err = {
      statusCode: 400,
      message: "Invalid password",
    };
    handleError(err, req, res, next);
    return null;
  }
  const result = await findUserByEmail(email);
  if (!result) {
    const err = {
      statusCode: 400,
      message: "User not found",
    };
    handleError(err, req, res, next);
    return null;
  }
  req.user_ = result;
  next();
}

export async function availability(req, res, next) {
  const { email, password, name } = req.body;
  if (!validEmail(email)) {
    const err = {
      statusCode: 400,
      message: "Invalid email",
    };
    handleError(err, req, res, next);
    return null;
  }
  if (!validPassword(password)) {
    const err = {
      statusCode: 400,
      message: "Invalid password",
    };
    handleError(err, req, res, next);
    return null;
  }
  if (!validName(name)) {
    const err = {
      statusCode: 400,
      message: "Invalid name",
    };
    handleError(err, req, res, next);
    return null;
  }
  const result = await findUserByEmail(email);
  console.log(result);
  if (result) {
    const err = {
      statusCode: 400,
      message: "User already exist",
    };
    handleError(err, req, res, next);
    return;
  }
  req.user_ = req.body;
  next();
}
