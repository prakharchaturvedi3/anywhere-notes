import { createUser, readUserByEmail } from "../models/userModels.js";
import bcrypt from "bcrypt";

export function findUserByEmail(email) {
  return readUserByEmail(email);
}

export function findUserById(id) {
  return getUserById(id);
}

export function newUser(record) {

  console.log('here');
  return createUser(record);
}

export function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}

export function generateHash(password) {
  return bcrypt.hash(password, 5);
}

