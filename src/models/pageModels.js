import { prisma } from "./db.js";

export function dbReadPageById(pageId) {
  try {
    return prisma.page.findUnique({
      where: {
        id: pageId,
        active: true,
      },
    });
  } catch (err) {
    next(err);
  }
}

export function dbReadPageByUserId(userId) {
  try {
    return prisma.page.findMany({
      where: {
        userId,
        active: true,
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
    next(err);
  }
}

export function dbCreatePage(record) {
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
    next(err);
  }
}

export function dbUpdatePage(record) {
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
  } catch (err) {
    next(err);
  }
}
