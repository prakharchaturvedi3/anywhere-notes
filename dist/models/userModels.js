import { prisma } from "./db.js";
export function dbReadUserByEmail(email) {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
}
export function dbCreateUser(record) {
    return prisma.user.create({
        data: {
            name: record.name,
            email: record.email,
            password: record.password,
        },
    });
}
//# sourceMappingURL=userModels.js.map