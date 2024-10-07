import * as EmailValidator from "email-validator";

export function validString(str) {
  if (!str) {
    return false;
  }
  return typeof str === "string";
}

export function validEmail(email) {
  if (!validString(email)) {
    return false;
  }
  return EmailValidator.validate(email);
}

export function validName(name) {
  if (!validString(name)) {
    return false;
  }
  if (name.length > process.env.MAX_NAME_LENGTH) {
    return false;
  }
  if (name.length < process.env.MIN_NAME_LENGTH) {
    return false;
  }
  return true;
}

export function validPassword(password) {
  if (!validString(password)) {
    return false;
  }
  if (password.length > process.env.MAX_PASSWORD_LENGTH) {
    return false;
  }
  if (password.length < process.env.MIN_PASSWORD_LENGTH) {
    return false;
  }
  return true;
}


