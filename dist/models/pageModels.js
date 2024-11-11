import { prisma } from "./db.js";
export function dbReadPageById(pageId) {
    return prisma.page.findUnique({
        where: {
            id: pageId,
            active: true,
        },
    });
}
export function dbReadPageByUserId(userId) {
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
export function dbCreatePage(record) {
    return prisma.page.create({
        data: {
            title: record.title,
            tags: record.tags || [],
            content: "",
            userId: record.userId,
        },
    });
}
export function dbUpdatePage(record) {
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
//# sourceMappingURL=pageModels.js.map