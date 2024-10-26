import { dbCreateUser, dbReadUserByEmail } from "../models/userModels.js";
import * as bcrypt from "bcrypt";

export function findUserByEmail(email) {
  return dbReadUserByEmail(email);
}

export function newUser(record) {
  return dbCreateUser(record);
}

export function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}

export function generateHash(password) {
  return bcrypt.hashSync(password, Number(process.env.SALT));
}
