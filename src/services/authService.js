import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { emailCount, getUser } from "../models/userModel.js";

export const createJWT = async (user) => {
  const payload = {
    email: user.email,
  };
  const options = {
    expiresIn: "2h",
  };
  return await jwt.sign(payload, process.env.JWT_SECRET, options);
};

export function verifyJWT(bearer) {
  if (!bearer) {
    return false;
  }
  const [, token] = bearer.split(" ");
  if (!token) {
    return false;
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (err) {
    return undefined;
  }
}

export async function matchPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

export async function hashPassword(password) {
  return await bcrypt.hash(password, 5);
}

export async function freeEmail(email) {
  return (await emailCount(email)) === 0;
}

export async function serchUser(email) {
  const result = await getUser(email);
  if (!result) {
    return null;
  }
  return result;
}
