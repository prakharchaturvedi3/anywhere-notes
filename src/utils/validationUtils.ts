import * as EmailValidator from "email-validator";

export function validArray(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every((ele) => validNonEmptyString(ele));
}

export function validEmail(email) {
  if (!validNonEmptyString(email)) {
    return false;
  }
  return EmailValidator.validate(email);
}

export function validName(name) {
  if (!validNonEmptyString(name)) {
    return false;
  }
  if (name.length > Number(process.env.MAX_NAME_LENGTH)) {
    return false;
  }
  if (name.length < Number(process.env.MIN_NAME_LENGTH)) {
    return false;
  }
  return true;
}

export function validNonEmptyString(str) {
  return typeof str === "string" && str.trim() !== "";
}

export function validPassword(password) {
  if (!validNonEmptyString(password)) {
    return false;
  }
  if (password.length > Number(process.env.MAX_PASSWORD_LENGTH)) {
    return false;
  }
  if (password.length < Number(process.env.MIN_PASSWORD_LENGTH)) {
    return false;
  }
  return true;
}
