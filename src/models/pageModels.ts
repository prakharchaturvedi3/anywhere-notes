import type { page } from "../index.js";
import { prisma } from "./db.js";

export function dbReadPageById(pageId: string) {
  return prisma.page.findUnique({
    where: {
      id: pageId,
      active: true,
    },
  });
}

export function dbReadPageByUserId(userId: string) {
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
}

export function dbCreatePage(record: page) {
  return prisma.page.create({
    data: {
      title: record.title,
      tags: record.tags || [],
      content: "",
      userId: record.userId,
    },
  });
}

export function dbUpdatePage(record: page & { id: string }) {
  return prisma.page.update({
    where: {
      id: record.id,
    },
    data: {
      id: record.id,
      active: record.active || true,
      content: record.content,
      tags: record.tags,
    },
  });
}
