"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPagesByUserId = findPagesByUserId;
exports.findPageById = findPageById;
exports.newPage = newPage;
exports.updatePage = updatePage;
exports.deactivatePage = deactivatePage;
const pageModels_ts_1 = require("../models/pageModels.ts");
function findPagesByUserId(id) {
    return (0, pageModels_ts_1.readPagesByUserId)(id);
}
function findPageById(id) {
    return (0, pageModels_ts_1.readPageById)(id);
}
function newPage(record) {
    return (0, pageModels_ts_1.createPage)(record);
}
function updatePage(record) {
    return (0, pageModels_ts_1.writePage)(record);
}
function deactivatePage(record) {
    record.active = false;
    return (0, pageModels_ts_1.writePage)(record);
}
