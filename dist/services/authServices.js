"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = verifyToken;
exports.createToken = createToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyToken(bearer) {
    console.log("her");
    if (!bearer) {
        return null;
    }
    const [_, token] = bearer.split(" ");
    if (!token) {
        console.log("her");
        return null;
    }
    try {
        return jsonwebtoken_1.default.verify(token, process.env.SECRET || "hafs");
    }
    catch (err) {
        return null;
    }
}
function createToken(id) {
    return jsonwebtoken_1.default.sign({
        id,
    }, process.env.SECRET || "hafs", {
        expiresIn: 152800,
    });
}
