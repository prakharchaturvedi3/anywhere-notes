import { findPageById } from "../services/pageService.js";
import { validArray, validNonEmptyString } from "../utils/validationUtils.js";

export async function pageAccess(req, res, next) {
  const pid = req.params.id;
  try {
    const page = await findPageById(pid);
    if (!page) {
      throw new Error("Page Not Found");
    }
    if (page.userId !== req.user_.id) {
      throw new Error("Page Not Found");
    }
    req.page_ = page;
  } catch (err) {
    return next(err);
  }
  next();
}

export function pageDataValidaton(req, res, next) {
  let { tags, title, content } = req.body;
  if (!validArray(tags)) {
    tags = [];
  }
  if (!validNonEmptyString(title)) {
    throw new Error("Empty or Invalid Title");
  }
  if (typeof content !== "string") {
    throw new Error("Invalid Content");
  }

  req.page_.title = title;
  req.page_.content = content;
  req.page_.tags = tags;
  next();
}
