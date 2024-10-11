import { handleError } from "../utils/errorUtils.js";
import { prisma } from "./db.js";

export function readUserByEmail(email) {
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
    return null;
  }
}

export function createUser(record) {
  console.log("fdsd");
  try {
    return prisma.user.create({
      data: {
        name: record.name,
        email: record.email,
        password: record.password,
      },
    });
  } catch (err) {
    handleError(err, req, res, next);
    return null;
  }
}
