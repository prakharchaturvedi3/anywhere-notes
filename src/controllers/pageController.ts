import {
  deactivatePage,
  findPagesByUserId,
  newPage,
  updatePage,
} from "../services/pageService.js";

import type { NextFunction, Request, Response } from "express";

export function sendPage(req: Request, res: Response) {
  res.json({ data: req.body.page_, user: req.body.user_ });
  res.end();
}

export async function sendAllPages(req: Request, res: Response) {
  const result = await findPagesByUserId(req.body.user_.id);
  res.json({ data: result, user: req.body.user_ });
}

export async function writePage(req: Request, res: Response) {
  req.body.page_.id = req.params.id;
  const result = await updatePage(req.body.page_);
  res.json({ data: result, user: req.body.user_ });
  res.end();
}

export async function deletePage(req: Request, res: Response) {
  const result = await deactivatePage(req.body.page_);
  res.json({ data: result, user: req.body.user_ });
  res.end();
}

export async function createNewPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    req.body.page_.userId = req.body.user_.id;
    const result = await newPage(req.body.page_);
    res.json({ data: result, user: req.body.user_ });
    res.end();
  } catch (err) {
    return next(err);
  }
}
