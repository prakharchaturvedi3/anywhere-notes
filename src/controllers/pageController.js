import { findPagesByUserId, newPage } from "../services/pageService.js";
import { handleError } from "../utils/errorUtils.js";

export function sendPage(req, res) {
  res.json({ data: req.page_, user: req.user_ });
  res.end();
}

export async function sendAllPages(req, res) {
  const result = await findPagesByUserId(req.user_.id);
  res.json({ data: result, user: req.user_ });
}

export async function updatePage(req, res) {
  const result = await updatePage(req.body);
  res.json({ data: result, user: req.user_ });
  res.end();
}

export async function removePage(req, res) {
  const result = await removePage(req.body);
  res.json({ data: result, user: req.user_ });
  res.end();
}

export async function createNewPage(req, res) {
  const result = await newPage(req.page_);
  if (!result) {
    const err = {
      statusCode: 400,
      message: "Page not created",
    };
    handleError(err, req, res);
    return
  }
  res.json({ data: result, user: req.user_ });
  res.end();
}
