import type { user } from "../index.js";
import { prisma } from "./db.js";

export function dbReadUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export function dbCreateUser(record: user) {
  return prisma.user.create({
    data: {
      name: record.name,
      email: record.email,
      password: record.password,
    },
  });
}
