import {
  deactivatePage,
  findPagesByUserId,
  newPage,
  updatePage,
} from "../services/pageService.js";

export function sendPage(req, res) {
  res.json({ data: req.page_, user: req.user_ });
  res.end();
}

export async function sendAllPages(req, res) {
  const result = await findPagesByUserId(req.user_.id);
  res.json({ data: result, user: req.user_ });
}

export async function writePage(req, res) {
  const result = await updatePage(req.page_);
  res.json({ data: result, user: req.user_ });
  res.end();
}

export async function deletePage(req, res) {
  const result = await deactivatePage(req.page_);
  res.json({ data: result, user: req.user_ });
  res.end();
}

export async function createNewPage(req, res) {
  try {
    const result = await newPage(req.page_);
    res.json({ data: result, user: req.user_ });
    res.end();
  } catch (err) {
    return next(err);
  }
}
