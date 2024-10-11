import { handleError } from "../utils/errorUtils.js";
import { prisma } from "./db.js";

export function readPageById(pageId) {
  try {
    return prisma.page.findUnique({
      where: {
        id: pageId,
        active: true,
      },
    });
  } catch (err) {
    handleError(err, req, res, next);
    return null;
  }
}

export function readPagesByUserId(userId) {
  try {
    return prisma.page.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        title: true,
        tags: true,
        updatedAt: true,
        createdAt: true,
      },
    });
  } catch (err) {
    return null;
  }
}

export function createPage(record) {
  try {
    return prisma.page.create({
      data: {
        title: record.title,
        tags: record.tags || [],
        content: "",
        userId: record.userId,
      },
    });
  } catch (err) {
    console.log(err);
    return null;
  }
}

export function writePage(record) {
  try {
    return prisma.page.update({
      where: {
        id: record.id,
      },
      data: {
        id: record.id,
        active: record.active,
        content: record.content,
        tags: record.tags,
      },
    });
  } catch {
    return null;
  }
}
