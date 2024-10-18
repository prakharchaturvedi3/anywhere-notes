"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUserByEmail = readUserByEmail;
exports.createUser = createUser;
const errorUtils_js_1 = require("../utils/errorUtils.js");
const db_js_1 = require("./db.js");
function readUserByEmail(email) {
    try {
        return db_js_1.prisma.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
    }
    catch (err) {
        return null;
    }
}
function createUser(record) {
    console.log("fdsd");
    try {
        return db_js_1.prisma.user.create({
            data: {
                name: record.name,
                email: record.email,
                password: record.password,
            },
        });
    }
    catch (err) {
        (0, errorUtils_js_1.handleError)(err, req, res, next);
        return null;
    }
}
