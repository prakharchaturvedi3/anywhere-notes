"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPage = sendPage;
exports.sendAllPages = sendAllPages;
exports.updatePage = updatePage;
exports.removePage = removePage;
exports.createNewPage = createNewPage;
const pageService_ts_1 = require("../services/pageService.ts");
const errorUtils_ts_1 = require("../utils/errorUtils.ts");
function sendPage(req, res) {
    res.json({ data: req.page_, user: req.user_ });
    res.end();
}
async function sendAllPages(req, res) {
    const result = await (0, pageService_ts_1.findPagesByUserId)(req.user_.id);
    res.json({ data: result, user: req.user_ });
}
async function updatePage(req, res) {
    const result = await updatePage(req.body);
    res.json({ data: result, user: req.user_ });
    res.end();
}
async function removePage(req, res) {
    const result = await removePage(req.body);
    res.json({ data: result, user: req.user_ });
    res.end();
}
async function createNewPage(req, res) {
    const result = await (0, pageService_ts_1.newPage)(req.page_);
    if (!result) {
        const err = {
            statusCode: 400,
            message: "Page not created",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res);
        return;
    }
    res.json({ data: result, user: req.user_ });
    res.end();
}
