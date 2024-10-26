import { prisma } from "./db.js";

export function dbReadUserByEmail(email) {
  try {
    return prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  } catch (err) {
    next(err);
  }
}

export function dbCreateUser(record) {
  try {
    return prisma.user.create({
      data: {
        name: record.name,
        email: record.email,
        password: record.password,
      },
    });
  } catch (err) {
    next(err);
  }
}
