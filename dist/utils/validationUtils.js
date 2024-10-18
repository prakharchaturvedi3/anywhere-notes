"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validArray = validArray;
exports.validEmail = validEmail;
exports.validName = validName;
exports.validNonEmptyString = validNonEmptyString;
exports.validPassword = validPassword;
const email_validator_1 = require("email-validator");
function validArray(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    return arr.every((ele) => validNonEmptyString(ele));
}
function validEmail(email) {
    if (!validNonEmptyString(email)) {
        return false;
    }
    return (0, email_validator_1.validate)(email);
}
function validName(name) {
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
function validNonEmptyString(str) {
    return typeof str === "string" && str.trim() !== "";
}
function validPassword(password) {
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
