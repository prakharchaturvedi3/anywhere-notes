import { findPageById } from "../services/pageService.js";
import { handleError } from "../utils/errorUtils.js";
import { validArray, validNonEmptyString } from "../utils/validationUtils.js";

export async function pageAccess(req, res, next) {
  const pid = req.params.id;
  const page = await findPageById(pid);
  if (!page) {
    return null;
  }
  if (page.userId !== req.user_.id) {
    handleError(err, req, res, next);
    return null;
  }
  req.page_ = page;
  next();
}

export function pageDataValidaton(req, res, next) {
  let { tags, title, content } = req.body;
  if (!validArray(tags)) {
    tags = [];
  }
  if (!validNonEmptyString(title)) {
    const err = {
      statusCode: 400,
      message: "Invalid title",
    };
    handleError(err, req, res, next);
    return null;
  }
  if (typeof content !== "string") {
    const err = {
      statusCode: 400,
      message: "Invalid content",
    };
    handleError(err, req, res, next);
    return null;
  }
  req.page_ = { title, content, tags, userId: req.user_.id };
  next();
}
