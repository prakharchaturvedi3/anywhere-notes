"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPageById = readPageById;
exports.readPagesByUserId = readPagesByUserId;
exports.createPage = createPage;
exports.writePage = writePage;
const errorUtils_js_1 = require("../utils/errorUtils.js");
const db_js_1 = require("./db.js");
function readPageById(pageId) {
    try {
        return db_js_1.prisma.page.findUnique({
            where: {
                id: pageId,
                active: true,
            },
        });
    }
    catch (err) {
        (0, errorUtils_js_1.handleError)(err, req, res, next);
        return null;
    }
}
function readPagesByUserId(userId) {
    try {
        return db_js_1.prisma.page.findMany({
            where: {
                userId,
            },
            select: {
                id: true,
                title: true,
                tags: true,
                updatedAt: true,
                createdAt: true,
            },
        });
    }
    catch (err) {
        return null;
    }
}
function createPage(record) {
    try {
        return db_js_1.prisma.page.create({
            data: {
                title: record.title,
                tags: record.tags || [],
                content: "",
                userId: record.userId,
            },
        });
    }
    catch (err) {
        console.log(err);
        return null;
    }
}
function writePage(record) {
    try {
        return db_js_1.prisma.page.update({
            where: {
                id: record.id,
            },
            data: {
                id: record.id,
                active: record.active,
                content: record.content,
                tags: record.tags,
            },
        });
    }
    catch {
        return null;
    }
}
