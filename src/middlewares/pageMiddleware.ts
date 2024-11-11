import type { Request, Response, NextFunction } from "express";
import { findPageById } from "../services/pageService.js";
import { ErrorConstructors } from "../utils/errorUtils.js";
import { validArray, validNonEmptyString } from "../utils/validationUtils.js";
import type { NodeWorker } from "inspector/promises";

export async function pageAccess(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const pid = req.params.id;
  try {
    if (!pid) {
      throw new ErrorConstructors.BadRequest("Page ID not found");
    }
    const page = await findPageById(pid);
    if (!page) {
      throw new ErrorConstructors.four04Request("Page Not Found");
    }
    if (page.userId !== req.body.user_.id) {
      throw new ErrorConstructors.ForbiddenRequest("Page Not Found");
    }
    req.body.page_ = page;
  } catch (err) {
    return next(err);
  }
  next();
}

export function pageDataValidaton(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { tags, title, content } = req.body;
  if (!validArray(tags)) {
    tags = [];
  }
  if (!validNonEmptyString(title)) {
    throw new ErrorConstructors.BadRequest("Empty or Invalid Title");
  }
  if (typeof content !== "string") {
    throw new ErrorConstructors.BadRequest("Invalid Content");
  }
  req.body.page_ = {
    title,
    content,
    tags,
  };
  next();
}
