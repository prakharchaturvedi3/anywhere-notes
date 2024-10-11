import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  pageAccess,
  pageDataValidaton,
} from "../middlewares/pageMiddleware.js";
import {
  createNewPage,
  removePage,
  sendAllPages,
  sendPage,
} from "../controllers/pageController.js";
import { updatePage } from "../services/pageService.js";

export const pageRouter = express.Router();

pageRouter.get("/", protect, sendAllPages);
pageRouter.post("/", protect, pageDataValidaton, createNewPage);
pageRouter.get("/:id", protect, pageAccess, sendPage);
pageRouter.put("/:id", protect, pageAccess, pageDataValidaton, updatePage);
pageRouter.delete("/:id", protect, pageAccess, removePage);
