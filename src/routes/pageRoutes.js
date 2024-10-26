import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  pageAccess,
  pageDataValidaton,
} from "../middlewares/pageMiddleware.js";
import {
  createNewPage,
  deletePage,
  sendAllPages,
  sendPage,
  writePage,
} from "../controllers/pageController.js";
export const pageRouter = express.Router();

pageRouter.get("/", protect, sendAllPages);
pageRouter.post("/", protect, pageDataValidaton, createNewPage);
pageRouter.get("/:id", protect, pageAccess, sendPage);
pageRouter.put("/:id", protect, pageAccess, pageDataValidaton, writePage);
pageRouter.delete("/:id", protect, pageAccess, deletePage);
