"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = findUserByEmail;
exports.findUserById = findUserById;
exports.newUser = newUser;
exports.comparePassword = comparePassword;
exports.generateHash = generateHash;
const userModels_js_1 = require("../models/userModels.js");
const bcrypt_1 = __importDefault(require("bcrypt"));
function findUserByEmail(email) {
    return (0, userModels_js_1.readUserByEmail)(email);
}
function findUserById(id) {
    return getUserById(id);
}
function newUser(record) {
    console.log('here');
    return (0, userModels_js_1.createUser)(record);
}
function comparePassword(password, hash) {
    return bcrypt_1.default.compare(password, hash);
}
function generateHash(password) {
    return bcrypt_1.default.hash(password, 5);
}
