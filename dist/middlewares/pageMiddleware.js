"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageAccess = pageAccess;
exports.pageDataValidaton = pageDataValidaton;
const pageService_ts_1 = require("../services/pageService.ts");
const errorUtils_ts_1 = require("../utils/errorUtils.ts");
const validationUtils_ts_1 = require("../utils/validationUtils.ts");
async function pageAccess(req, res, next) {
    const pid = req.params.id;
    const page = await (0, pageService_ts_1.findPageById)(pid);
    if (!page) {
        return null;
    }
    if (page.userId !== req.user_.id) {
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return null;
    }
    req.page_ = page;
    next();
}
function pageDataValidaton(req, res, next) {
    let { tags, title, content } = req.body;
    if (!(0, validationUtils_ts_1.validArray)(tags)) {
        tags = [];
    }
    if (!(0, validationUtils_ts_1.validNonEmptyString)(title)) {
        const err = {
            statusCode: 400,
            message: "Invalid title",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return null;
    }
    if (typeof content !== "string") {
        const err = {
            statusCode: 400,
            message: "Invalid content",
        };
        (0, errorUtils_ts_1.handleError)(err, req, res, next);
        return null;
    }
    req.page_ = { title, content, tags, userId: req.user_.id };
    next();
}
