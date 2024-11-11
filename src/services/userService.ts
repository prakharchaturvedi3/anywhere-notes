import type { user } from "../index.js";
import { dbCreateUser, dbReadUserByEmail } from "../models/userModels.js";
import * as bcrypt from "bcrypt";

export function findUserByEmail(email: string) {
  return dbReadUserByEmail(email);
}



export function newUser(record: user) {
  return dbCreateUser(record);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function generateHash(password: string) {
  return bcrypt.hashSync(password, Number(process.env.SALT));
}
