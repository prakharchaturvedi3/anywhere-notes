import * as EmailValidator from "email-validator";

export function validArray(arr: string[]) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every((ele) => validNonEmptyString(ele));
}

export function validEmail(email: string) {
  if (!validNonEmptyString(email)) {
    return false;
  }
  return EmailValidator.validate(email);
}

export function validName(name: string) {
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

export function validNonEmptyString(str: string) {
  return typeof str === "string" && str.trim() !== "";
}

export function validPassword(password: string) {
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
